import { Type } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BrokerageNote } from "./BrokerageNote";
import { Custody } from "./Custody";

@Entity("user")
export class User {

    @PrimaryGeneratedColumn({type: "int"})
    id?: number;

    // Nome Completo
    @Column({type: "varchar", length: 100})
    fullName?: string;

    // Documento CPF
    @Column({nullable: true, type: "char", length: 11})
    cpf?: string;

    // Data de Nascimento
    @Column({type: "date"})
    @Type(() => Date) // converte string em objeto Date de forma automática
    birthDate?: Date;

    // E-mail
    @Column({type: "varchar", length: 150})
    email?: string;

    // Credencial de Acesso
    @Column({type: "varchar", length:255})
    password?: string;

    @OneToMany(() => BrokerageNote, note => note.user)
    brokerageNotes!: BrokerageNote[];

    @OneToMany(() => Custody, custody => custody.user)
    custody!: Custody[];

}