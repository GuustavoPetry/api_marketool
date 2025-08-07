import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

// Armazena os Ativos em Custódia
// Cada Custódia está relacionada a um Usuário
@Entity("custody")
export class Custody {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    // Ticker do Ativo
    @Column({type: "char", length: 10})
    asset_ticker!: string;

    // Tipo do Ativo: Ação, Fundo, Cripto...
    @Column({type: "varchar", length: 20})
    asset_type!: string;

    // Setor do Ativo
    @Column({type: "varchar", length: 30})
    asset_sector!: string;

    // Quantidade em Custódia
    @Column({type: "int"})
    quantity!: number;

    // Valor Total Investido
    @Column({type: "decimal", precision: 10, scale: 2})
    total_invested!: number;

    // Relacionamento com Usuário
    @Column({ type: "int" })
    user_id!: number;
    @ManyToOne(() => User, user => user.custody)
    @JoinColumn({ name: "user_id" })
    user!: User;

}