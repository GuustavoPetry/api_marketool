import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { User } from "./User";

// Armazena os Ativos em Custódia
// Cada Custódia está relacionada a um Usuário
@Entity("custody")
export class Custody {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    // Ticker do Ativo
    @Column({type: "char", length: 10})
    assetTicker!: string;

    // Tipo do Ativo: Ação, Fundo, Cripto...
    @Column({type: "varchar", length: 20, nullable: true})
    assetType!: string;

    // Setor do Ativo
    @Column({type: "varchar", length: 30, nullable: true})
    assetSector!: string;

    // Quantidade em Custódia
    @Column({type: "int"})
    quantity!: number;

    // Valor Total Investido
    @Column({type: "decimal", precision: 10, scale: 2})
    totalInvested!: number;

    // Relacionamento com Usuário
    @ManyToOne(() => User, user => user.custody, {nullable: false})
    @JoinColumn({ name: "user_id" })
    user!: User;
    @RelationId((custody: Custody) => custody.user)
    userId!: number;

}