"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1754573229162 = void 0;
class CreateTables1754573229162 {
    name = 'CreateTables1754573229162';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`Operation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`operation_type\` char(6) NOT NULL, \`asset_ticker\` char(10) NOT NULL, \`quantity\` int NULL, \`unit_price\` decimal(10,2) NOT NULL, \`total_price\` decimal(10,2) NOT NULL, \`note_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`brokerage_note\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` date NOT NULL, \`broker\` varchar(30) NOT NULL, \`document\` varchar(20) NOT NULL, \`total_value\` decimal(10,2) NOT NULL, \`user_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`custody\` (\`id\` int NOT NULL AUTO_INCREMENT, \`asset_ticker\` char(10) NOT NULL, \`asset_type\` varchar(20) NOT NULL, \`asset_sector\` varchar(30) NOT NULL, \`quantity\` int NOT NULL, \`total_invested\` decimal(10,2) NOT NULL, \`user_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fullName\` varchar(100) NOT NULL, \`cpf\` char(11) NULL, \`birthDate\` date NOT NULL, \`email\` varchar(150) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Operation\` ADD CONSTRAINT \`FK_cd326f7c5de871c340c4a73fda8\` FOREIGN KEY (\`note_id\`) REFERENCES \`brokerage_note\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`brokerage_note\` ADD CONSTRAINT \`FK_f33f0f69cb8364c128100cb2859\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`custody\` ADD CONSTRAINT \`FK_aab71b7513617ff902a1bb92e90\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`custody\` DROP FOREIGN KEY \`FK_aab71b7513617ff902a1bb92e90\``);
        await queryRunner.query(`ALTER TABLE \`brokerage_note\` DROP FOREIGN KEY \`FK_f33f0f69cb8364c128100cb2859\``);
        await queryRunner.query(`ALTER TABLE \`Operation\` DROP FOREIGN KEY \`FK_cd326f7c5de871c340c4a73fda8\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`custody\``);
        await queryRunner.query(`DROP TABLE \`brokerage_note\``);
        await queryRunner.query(`DROP TABLE \`Operation\``);
    }
}
exports.CreateTables1754573229162 = CreateTables1754573229162;
