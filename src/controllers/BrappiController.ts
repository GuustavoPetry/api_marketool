import { Request, Response } from "express";
import { BrappiService } from "../services/BrappiService";

export const BrappiController = {
    searchAssets: async (req: Request, res: Response) => {
        try {
            const { search = "", page = "1", limit = "150"} = req.query;

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
    },

    getHistoricalDataPrice: async (req: Request, res: Response) => {
        try {
            const { ticker } = req.params;
            const asset = await BrappiService.getHistoricalDataPrice(ticker);
            res.json(asset);
        } catch(e) {
            res.status(500).json({ message: "Erro Interno"})
        }
    },

    getRegularMarketPrice: async (req: Request, res: Response) => {
        try {
            const { ticker } = req.params;
            const asset = await BrappiService.getRegularMarketVariation(ticker);
            res.json(asset);
        } catch(e) {
            res.status(500).json({ message: "Erro Interno"})
        }
    }
}