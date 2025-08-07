import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BrokerageNote } from "./BrokerageNote";

// Armazena as operações de investimentos
// Cada operação está relacionada a uma Nota de Corretagem
@Entity("Operation")
export class Operation {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    // Compra ou Venda
    @Column({type: "char", length: 6})
    operation_type!: string; 

    // Ticker do ativo
    @Column({type: "char", length: 10})
    asset_ticker!: string;

    // Quantidade Negociada
    @Column({type: "int", nullable: true})
    quantity!: number;

    // Preço unitário
    @Column({type: "decimal", precision: 10, scale: 2})
    unit_price!: number;

    // Preço total da operação
    @Column({type: "decimal", precision: 10, scale: 2})
    total_price!: number;

    // Relacionamento com Nota de Corretagem
    @Column({type: "int"})
    note_id!: number;
    @ManyToOne(() => BrokerageNote, note => note.operations)
    @JoinColumn({name: "note_id"})
    note!: BrokerageNote;

}