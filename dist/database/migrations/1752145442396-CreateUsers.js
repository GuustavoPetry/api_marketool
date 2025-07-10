"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1752145442396 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsers1752145442396 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "fullName",
                    type: "varchar",
                    length: "100"
                },
                {
                    name: "cpf",
                    type: "char",
                    length: "11",
                    isNullable: true
                },
                {
                    name: "birthDate",
                    type: "date",
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "150"
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUsers1752145442396 = CreateUsers1752145442396;
