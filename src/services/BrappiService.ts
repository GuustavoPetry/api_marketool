import axios from "axios";

const BRAPPI_BASE_URL = "https://brapi.dev/api/quote";
const BRAPPI_TOKEN = process.env.BRAPPI_TOKEN;

interface AssetResponse {
    stock: string,
    name: string,
    close: number,
    change: number,
    volume: number,
    market_cap: number,
    logo: string,
    sector: string,
    type: string,
    [key: string]: any;
}

interface AssetDataPrice {
    date: number,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
    adjustedClose: number
}

interface MarketData {
    regularMarketPrice: number;
    regularMarketChange: number;
    regularMarketChangePercent: number;
}

export const BrappiService = {

    searchAssets: async (search: string, page = 1, limit = 10): Promise<AssetResponse[]> => {
        const url = `${BRAPPI_BASE_URL}/list?search=${search}&sortBy=volume&sortOrder=desc&limit=${limit}&page=${page}&token=${BRAPPI_TOKEN}`;
        const response = await axios.get(url);
        return response.data.stocks;
    },

    getHistoricalDataPrice: async (ticker: string): Promise<AssetDataPrice[]> => {
        const url = `${BRAPPI_BASE_URL}/${ticker}?token=${BRAPPI_TOKEN}&range=1mo&interval=1d&modules=summaryProfile`;
        const response = await axios.get(url);
        return response.data.results[0].historicalDataPrice;
    },

    getRegularMarketVariation: async (ticker: string): Promise<MarketData> => {
        const url = `${BRAPPI_BASE_URL}/${ticker}?token=${BRAPPI_TOKEN}&range=1d&interval=1d&modules=summaryProfile`;
        const response = await axios.get(url);
        const result = response.data.results[0];

        return {
            regularMarketPrice: Number(result.regularMarketPrice),
            regularMarketChange: Number(result.regularMarketChange),
            regularMarketChangePercent: Number(result.regularMarketChangePercent)
        };
    },
}