import { AppDataSource } from "../database/data-source";
import { Custody } from "../entities/Custody";

export class CustodyService {
    private repo = AppDataSource.getRepository(Custody);

    async getUserCustody(userId: number) {
        const custodyList =  await this.repo.find({ where: {userId} });

        if (!custodyList.length) {
            return [];
        }

        const totalInvested = custodyList.reduce(
            (sum, asset) => sum + Number(asset.totalInvested),
            0
        );

        return custodyList.map(asset => ({
            assetTicker: asset.assetTicker,
            totalInvested: Number(asset.totalInvested),
            percentage: (Number(asset.totalInvested) / totalInvested) * 100
        }));
    }
}