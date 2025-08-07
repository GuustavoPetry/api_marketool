import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity("custody")
export class Custody {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    // Ticker do Ativo
    @Column({type: "char", length: 10, nullable: true})
    asset_ticker!: string;

    // Tipo do Ativo: Ação, Fundo, Cripto...
    @Column({type: "varchar", length: 20, nullable: true})
    asset_type!: string;

    // Setor do Ativo
    @Column({type: "varchar", length: 30, nullable: true})
    asset_sector!: string;

    // Quantidade em Custódia
    @Column({type: "int", nullable: true})
    quantity!: number;

    // Valor Total Investido
    @Column({type: "decimal", precision: 10, scale: 2, nullable: true})
    total_invested!: number;


}