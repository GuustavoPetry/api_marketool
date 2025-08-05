import { Request, Response } from "express";
import { BrappiService } from "../services/BrappiService";

export const BrappiController = {
    getAssets: async (req: Request, res: Response) => {
        try {
            const { search = "", page = "1", limit = "10"} = req.query;

            const assets = await BrappiService.searchAssets(
                search.toString(),
                parseInt(page.toString()),
                parseInt(limit.toString())
            );

            res.json(assets);

        } catch(e) {
            console.error(e);
            res.status(500).json({ message: "Erro ao buscar ativos" });
        }
    }
}