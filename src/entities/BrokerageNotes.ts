import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("brokerage-notes")
export class BrokerageNotes {

    @PrimaryGeneratedColumn({type: "int"})
    id!: number;

    // Data da Nota de Corretagem
    @Column({type: "date", nullable: true})
    date!: Date;

    // Corretora Responsável
    @Column({type: "varchar", length: 30, nullable: true})
    broker!: string;

    // Número do Documento
    @Column({type: "varchar", length: 20, nullable: true})
    document!: string;

    // Valor Total da Nota
    @Column({type: "decimal", precision: 10, scale: 2, nullable: true})
    total_value!: number;
    

}