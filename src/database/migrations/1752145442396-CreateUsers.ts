import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1752145442396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
