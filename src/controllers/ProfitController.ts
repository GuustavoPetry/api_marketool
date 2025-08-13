import { Request, Response } from "express";
import { ProfitService } from "../services/ProfitService";

export class ProfitController {
    private profitService = new ProfitService();

    getUserCustodyWithProfit = async (req: Request, res: Response) => {
        try {
            const userId = Number(req.params.userId);
            const data = await this.profitService.getUserCustodyWithProfit(userId);
            return res.json(data);
        } catch(e) {
            console.error(e);
            return res.status(500).json({error: "Erro ao calcular lucro"})
        }
    };
}