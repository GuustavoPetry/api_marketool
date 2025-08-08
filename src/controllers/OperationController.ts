import { Request, Response } from "express";
import { CreateOperationDTO, OperationService } from "../services/OperationService";

export const OperationController = {
    addOperation: async (req: Request, res: Response): Promise<void> => {
        try {
            const dto: CreateOperationDTO = req.body;
            const result = await OperationService.addOperation(dto);

            res.status(201).json({
                message: "Operação registrada com sucesso",
                data: result
            });

        } catch(e) {
            console.error(e);
            res.status(500).json({
                message: "Erro ao registrar operação",
                error: (e as Error).message
            });
        }
    }
}