import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BrokerageNote } from "./BrokerageNote";

export enum OperationType {
    COMPRA = "COMPRA",
    VENDA = "VENDA"
}

// Armazena as operações de investimentos
// Cada operação está relacionada a uma Nota de Corretagem
@Entity("operation")
export class Operation {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    // Compra ou Venda
    @Column({type: "enum", enum: OperationType})
    operationType!: OperationType; 

    // Ticker do ativo
    @Column({type: "char", length: 10})
    assetTicker!: string;

    // Quantidade Negociada
    @Column({type: "int", nullable: true})
    quantity!: number;

    // Preço unitário
    @Column({type: "decimal", precision: 10, scale: 2})
    unitPrice!: number;

    // Preço total da operação
    @Column({type: "decimal", precision: 10, scale: 2})
    totalPrice!: number;

    // Relacionamento com Nota de Corretagem
    @ManyToOne(() => BrokerageNote, note => note.operations, {nullable: false})
    @JoinColumn({name: "noteId"})
    note!: BrokerageNote;

    @Column({ name: "noteId", type: "int" })
    noteId!: number;

}