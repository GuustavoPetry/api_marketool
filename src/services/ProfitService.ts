import { AppDataSource } from "../database/data-source";
import { Custody } from "../entities/Custody";
import { BrappiService } from "./BrappiService";

export class ProfitService {
    private repo = AppDataSource.getRepository(Custody);
    
    async getUserCustodyWithProfit(userId: number) {
        const custodyList = await this.repo.find({ where: {userId} });

        if(!custodyList.length) return [];

        const totalInvested = custodyList.reduce(
            (sum, asset) => sum + Number(asset.totalInvested),
            0
        );

        const results = [];

        for (const asset of custodyList) {
            const { regularMarketPrice, regularMarketChange, regularMarketChangePercent} = 
                await BrappiService.getRegularMarketVariation(asset.assetTicker);
            
            const currentValue = regularMarketPrice * Number(asset.quantity);
            const profitPercentage = ((currentValue - Number(asset.totalInvested)) / Number(asset.totalInvested)) * 100;
            const profitValue = currentValue - totalInvested;

            results.push({
                assetTicker: asset.assetTicker,
                regularMarketChange,
                regularMarketChangePercent,
                profitPercentage,
                profitValue,
            })

        }

        return results;
        
    }
}