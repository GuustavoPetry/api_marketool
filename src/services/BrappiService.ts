import axios from "axios";

const BRAPPI_BASE_URL = "https://brapi.dev/api/quote/list";
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

export const BrappiService = {

    searchAssets: async (search: string, page = 1, limit = 10): Promise<AssetResponse[]> => {
        const url = `${BRAPPI_BASE_URL}?search=${search}&sortBy=name&sortOrder=asc&limit=${limit}&page=${page}&token=${BRAPPI_TOKEN}`;
        const response = await axios.get(url);
        return response.data.stocks;
    }
}