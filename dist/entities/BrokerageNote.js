"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokerageNote = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Operation_1 = require("./Operation");
// Armazena as Notas de Corretagem
// Cada nota de corretagem está relacionada a um Usuário
let BrokerageNote = class BrokerageNote {
    id;
    // Data da Nota de Corretagem
    date;
    // Corretora Responsável
    broker;
    // Número do Documento
    document;
    // Valor Total da Nota
    total_value;
    // Relacionamento com Usuário
    user_id;
    user;
    operations;
};
exports.BrokerageNote = BrokerageNote;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int" }),
    __metadata("design:type", Number)
], BrokerageNote.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", Date)
], BrokerageNote.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 30 }),
    __metadata("design:type", String)
], BrokerageNote.prototype, "broker", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], BrokerageNote.prototype, "document", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], BrokerageNote.prototype, "total_value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], BrokerageNote.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.brokerageNotes),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", User_1.User)
], BrokerageNote.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Operation_1.Operation, operation => operation.note),
    __metadata("design:type", Array)
], BrokerageNote.prototype, "operations", void 0);
exports.BrokerageNote = BrokerageNote = __decorate([
    (0, typeorm_1.Entity)("brokerage_notes")
], BrokerageNote);
