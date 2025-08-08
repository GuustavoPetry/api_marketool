import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1754654995450 implements MigrationInterface {
    name = 'CreateTables1754654995450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Operation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`operationType\` enum ('COMPRA', 'VENDA') NOT NULL, \`assetTicker\` char(10) NOT NULL, \`quantity\` int NULL, \`unitPrice\` decimal(10,2) NOT NULL, \`totalPrice\` decimal(10,2) NOT NULL, \`noteId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`brokerage_note\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`broker\` varchar(30) NOT NULL, \`document\` varchar(20) NOT NULL, \`totalValue\` decimal(10,2) NOT NULL, \`userId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`custody\` (\`id\` int NOT NULL AUTO_INCREMENT, \`assetTicker\` char(10) NOT NULL, \`assetType\` varchar(20) NULL, \`assetSector\` varchar(30) NULL, \`quantity\` int NOT NULL, \`totalInvested\` decimal(10,2) NOT NULL, \`userId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fullName\` varchar(100) NOT NULL, \`cpf\` char(11) NULL, \`birthDate\` date NOT NULL, \`email\` varchar(150) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Operation\` ADD CONSTRAINT \`FK_f397d77b1a117a6445608b27645\` FOREIGN KEY (\`noteId\`) REFERENCES \`brokerage_note\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`brokerage_note\` ADD CONSTRAINT \`FK_389cfd7fb484db9fa533b6e3a94\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`custody\` ADD CONSTRAINT \`FK_b143dcfc9b270fea3bf20ab321a\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`custody\` DROP FOREIGN KEY \`FK_b143dcfc9b270fea3bf20ab321a\``);
        await queryRunner.query(`ALTER TABLE \`brokerage_note\` DROP FOREIGN KEY \`FK_389cfd7fb484db9fa533b6e3a94\``);
        await queryRunner.query(`ALTER TABLE \`Operation\` DROP FOREIGN KEY \`FK_f397d77b1a117a6445608b27645\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`custody\``);
        await queryRunner.query(`DROP TABLE \`brokerage_note\``);
        await queryRunner.query(`DROP TABLE \`Operation\``);
    }

}
