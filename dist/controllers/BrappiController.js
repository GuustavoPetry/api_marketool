"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrappiController = void 0;
const BrappiService_1 = require("../services/BrappiService");
exports.BrappiController = {
    searchAssets: async (req, res) => {
        try {
            const { search = "", page = "1", limit = "150" } = req.query;
            const assets = await BrappiService_1.BrappiService.searchAssets(search.toString(), parseInt(page.toString()), parseInt(limit.toString()));
            res.json(assets);
        }
        catch (e) {
            console.error(e);
            res.status(500).json({ message: "Erro ao buscar ativos" });
        }
    },
    getOneAsset: async (req, res) => {
        try {
            const { ticker } = req.params;
            const asset = await BrappiService_1.BrappiService.getOneAsset(ticker);
            res.json(asset);
        }
        catch (e) {
            res.status(500).json({ message: "Erro Interno" });
        }
    }
};
