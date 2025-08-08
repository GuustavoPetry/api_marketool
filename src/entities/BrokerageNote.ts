import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { User } from "./User";
import { Operation } from "./Operation";

// Armazena as Notas de Corretagem
// Cada nota de corretagem está relacionada a um Usuário
@Entity("brokerage_note")
export class BrokerageNote {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    // Data da Nota de Corretagem
    @Column({type: "date"})
    date!: string;

    // Corretora Responsável
    @Column({type: "varchar", length: 30})
    broker!: string;

    // Número do Documento
    @Column({type: "varchar", length: 20})
    document!: string;

    // Valor Total da Nota
    @Column({type: "decimal", precision: 10, scale: 2})
    totalValue!: number;

    // Relacionamento com Usuário
    @ManyToOne(() => User, user => user.brokerageNotes, {nullable: false})
    @JoinColumn({ name: "userId" })
    user!: User;

    @Column({ name: "userId", type: "int" })
    userId!: number;

    @OneToMany(() => Operation, operation => operation.note)
    operations!: Operation[];
    
}