import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
    date!: Date;

    // Corretora Responsável
    @Column({type: "varchar", length: 30})
    broker!: string;

    // Número do Documento
    @Column({type: "varchar", length: 20, nullable: true})
    document?: string;

    // Valor Total da Nota
    @Column({type: "decimal", precision: 10, scale: 2, default: 0})
    total_value!: number;

    // Relacionamento com Usuário
    @Column({type: "int"})
    user_id!: number;
    @ManyToOne(() => User, user => user.brokerageNotes)
    @JoinColumn({ name: "user_id" })
    user!: User;

    @OneToMany(() => Operation, operation => operation.note)
    operations!: Operation[];
    
}