import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Armazena as operações de investimentos
// Cada operação está relacionada a uma Nota de Corretagem
@Entity("Operations")
export class Operations {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    // Compra ou Venda
    @Column({type: "char", length: 6, nullable: true})
    operation_type!: string;

    // Ticker do ativo
    @Column({type: "char", length: 10 , nullable: true})
    asset_ticker!: string;

    // Quantidade Negociada
    @Column({type: "int", nullable: true})
    quantity!: number;

    // Preço unitário
    @Column({type: "decimal", precision: 10, scale: 2, nullable: true})
    unit_price!: number;

    // Preço total da operação
    @Column({type: "decimal", precision: 10, scale: 2, nullable: true})
    total_price!: number;

}