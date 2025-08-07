"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrappiService = void 0;
const axios_1 = __importDefault(require("axios"));
const BRAPPI_BASE_URL = "https://brapi.dev/api/quote";
const BRAPPI_TOKEN = process.env.BRAPPI_TOKEN;
exports.BrappiService = {
    searchAssets: async (search, page = 1, limit = 10) => {
        const url = `${BRAPPI_BASE_URL}/list?search=${search}&sortBy=volume&sortOrder=desc&limit=${limit}&page=${page}&token=${BRAPPI_TOKEN}`;
        const response = await axios_1.default.get(url);
        return response.data.stocks;
    },
    getOneAsset: async (ticker) => {
        const url = `${BRAPPI_BASE_URL}/${ticker}?token=${BRAPPI_TOKEN}&range=1mo&interval=1d&modules=summaryProfile`;
        const response = await axios_1.default.get(url);
        return response.data.results[0].historicalDataPrice;
    }
};
