import { Type } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn({type: "int"})
    id?: number;

    @Column({type: "varchar", length: 100})
    fullName?: string;

    @Column({nullable: true, type: "char", length: 11})
    cpf?: string;

    @Column({type: "date"})
    @Type(() => Date) // converte string em objeto Date de forma automática
    birthDate?: Date;

    @Column({type: "varchar", length: 150})
    email?: string;

    @Column({type: "varchar", length:255})
    password?: string;

}