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
exports.Operation = void 0;
const typeorm_1 = require("typeorm");
const BrokerageNote_1 = require("./BrokerageNote");
// Armazena as operações de investimentos
// Cada operação está relacionada a uma Nota de Corretagem
let Operation = class Operation {
    id;
    // Compra ou Venda
    operation_type;
    // Ticker do ativo
    asset_ticker;
    // Quantidade Negociada
    quantity;
    // Preço unitário
    unit_price;
    // Preço total da operação
    total_price;
    // Relacionamento com Nota de Corretagem
    note_id;
    note;
};
exports.Operation = Operation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int" }),
    __metadata("design:type", Number)
], Operation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 6 }),
    __metadata("design:type", String)
], Operation.prototype, "operation_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 10 }),
    __metadata("design:type", String)
], Operation.prototype, "asset_ticker", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true }),
    __metadata("design:type", Number)
], Operation.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Operation.prototype, "unit_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Operation.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Operation.prototype, "note_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BrokerageNote_1.BrokerageNote, note => note.operations),
    (0, typeorm_1.JoinColumn)({ name: "note_id" }),
    __metadata("design:type", BrokerageNote_1.BrokerageNote)
], Operation.prototype, "note", void 0);
exports.Operation = Operation = __decorate([
    (0, typeorm_1.Entity)("Operation")
], Operation);
