import { Request, Response } from "express";
import { CustodyService } from "../services/CustodyService";

export class CustodyController {
    private custodyService = new CustodyService();

    getUserCustody = async (req: Request, res: Response) => {
        try {
            const userId = Number(req.params.userId);
            const data = await this.custodyService.getUserCustody(userId);
            return res.json(data);
        } catch(e) {
            console.error(e);
            return res.status(500).json({error: "Erro ao buscar ativos em custódia"})
        }
    };
}