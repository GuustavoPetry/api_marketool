import { MigrationInterface, QueryRunner } from "typeorm";

export class RuleAdjustement1754579806483 implements MigrationInterface {
    name = 'RuleAdjustement1754579806483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`operation\` DROP FOREIGN KEY \`FK_cd326f7c5de871c340c4a73fda8\``);
        await queryRunner.query(`ALTER TABLE \`operation\` CHANGE \`quantity\` \`quantity\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`operation\` CHANGE \`unit_price\` \`unit_price\` decimal(10,2) NOT NULL DEFAULT '0.00'`);
        await queryRunner.query(`ALTER TABLE \`operation\` CHANGE \`total_price\` \`total_price\` decimal(10,2) NOT NULL DEFAULT '0.00'`);
        await queryRunner.query(`ALTER TABLE \`brokerage_note\` CHANGE \`document\` \`document\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`brokerage_note\` CHANGE \`total_value\` \`total_value\` decimal(10,2) NOT NULL DEFAULT '0.00'`);
        await queryRunner.query(`ALTER TABLE \`custody\` CHANGE \`quantity\` \`quantity\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`custody\` CHANGE \`total_invested\` \`total_invested\` decimal(10,2) NOT NULL DEFAULT '0.00'`);
        await queryRunner.query(`ALTER TABLE \`operation\` ADD CONSTRAINT \`FK_fedbf195be2eda28b624517a399\` FOREIGN KEY (\`note_id\`) REFERENCES \`brokerage_note\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`operation\` DROP FOREIGN KEY \`FK_fedbf195be2eda28b624517a399\``);
        await queryRunner.query(`ALTER TABLE \`custody\` CHANGE \`total_invested\` \`total_invested\` decimal(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`custody\` CHANGE \`quantity\` \`quantity\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`brokerage_note\` CHANGE \`total_value\` \`total_value\` decimal(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`brokerage_note\` CHANGE \`document\` \`document\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`operation\` CHANGE \`total_price\` \`total_price\` decimal(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`operation\` CHANGE \`unit_price\` \`unit_price\` decimal(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`operation\` CHANGE \`quantity\` \`quantity\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`operation\` ADD CONSTRAINT \`FK_cd326f7c5de871c340c4a73fda8\` FOREIGN KEY (\`note_id\`) REFERENCES \`brokerage_note\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
