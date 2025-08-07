import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOperationTable1754567260951 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "operation",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "operation_type",
                        type: "char",
                        length: "6"
                    },
                    {
                        name: "asset_ticker",
                        type: "char",
                        length: "10"
                    },
                    {
                        name: "quantity",
                        type: "int",
                    },
                    {
                        name: "unit_price",
                        type: "decimal",
                        precision: 10,
                        scale: 2
                    },
                    {
                        name: "total_price",
                        type: "decimal",
                        precision: 10,
                        scale: 2
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
