import { AppDataSource } from "../database/data-source";
import { BrokerageNote } from "../entities/BrokerageNote";
import { Custody } from "../entities/Custody";
import { Operation, OperationType } from "../entities/Operation";

export interface CreateOperationDTO {
    // Dados para tabela BrokerageNote
    userId: number;
    date: string;
    broker: string;
    document: string;
    totalValue: number;
    // Dados para tabela Operation
    noteId: number;
    operationType: OperationType;
    assetTicker: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
}

const brokerageNoteRepo = AppDataSource.getRepository(BrokerageNote);
const operationRepo = AppDataSource.getRepository(Operation);
const custodyRepo = AppDataSource.getRepository(Custody);

export const OperationService = {
    addOperation: async (dto: CreateOperationDTO) => {
        if(!Object.values(OperationType).includes(dto.operationType)) {
            throw new Error(`Tipo de operação inválida: ${dto.operationType}`);
        }

        return await AppDataSource.transaction(async (manager) => {
            let noteId: number;

            // Verifica se já exista alguma Nota naquela Data
            const existingNote = await manager.findOne(BrokerageNote, {
                where: {
                    userId: dto.userId,
                    date: dto.date
                }
            });

            if (existingNote) {
                // Se a Nota existe captura o ID
                noteId = existingNote.id;
                if(dto.operationType === OperationType.COMPRA) {
                    existingNote.totalValue = Number(existingNote.totalValue) + Number(dto.totalPrice);
                } else {
                    existingNote.totalValue = Number(existingNote.totalValue) - Number(dto.totalPrice);
                }
                await manager.save(BrokerageNote, existingNote);
            } else {
                // Se não registra a Nota
                const newNote = manager.create(BrokerageNote, {
                    userId: dto.userId,
                    date: dto.date,
                    broker: dto.broker,
                    document: dto.document,
                    totalValue: dto.totalPrice
                });
                // Salva a Nota e captura o ID
                const savedNote = await manager.save(BrokerageNote, newNote);
                noteId = savedNote.id;
            }

            // Registrar a Operação na tabela operation
            const newOperation = manager.create(Operation, {
                noteId: noteId,
                operationType: dto.operationType,
                assetTicker: dto.assetTicker,
                quantity: dto.quantity,
                unitPrice: dto.unitPrice,
                totalPrice: dto.totalPrice
            });

            await manager.save(Operation, newOperation);

            // Verifica se já existe a Custódia do ativo em questão
            let custody = await manager.findOne(Custody, {
                where: {
                    userId: dto.userId,
                    assetTicker: dto.assetTicker
                }
            });

            if(custody) {
                // Se já existe a custódia, atualiza o estoque
                if(dto.operationType === OperationType.COMPRA) {
                    custody.quantity += dto.quantity;
                    custody.totalInvested = Number(custody.totalInvested) + Number(dto.totalPrice);
                } else if(dto.operationType === OperationType.VENDA) {
                    custody.quantity -= dto.quantity;
                    custody.totalInvested = Number(custody.totalInvested) - Number(dto.totalPrice);
                    if(custody.quantity < 0) {
                        throw new Error("Venda maior que estoque disponível");
                    }
                }
                await manager.save(Custody, custody);
            } else {
                if(dto.operationType !== OperationType.COMPRA) {
                    throw new Error("Você não possui custódia para venda");
                }
                const newCustody = manager.create(Custody, {
                    userId: dto.userId,
                    assetTicker: dto.assetTicker,
                    quantity: dto.quantity,
                    totalInvested: dto.totalPrice
                });
                await manager.save(Custody, newCustody);
            }

            return { message: "Operação registrada com sucesso"};

        });
        
    }
};