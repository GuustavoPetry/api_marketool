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
exports.Custody = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
// Armazena os Ativos em Custódia
// Cada Custódia está relacionada a um Usuário
let Custody = class Custody {
    id;
    // Ticker do Ativo
    asset_ticker;
    // Tipo do Ativo: Ação, Fundo, Cripto...
    asset_type;
    // Setor do Ativo
    asset_sector;
    // Quantidade em Custódia
    quantity;
    // Valor Total Investido
    total_invested;
    // Relacionamento com Usuário
    user_id;
    user;
};
exports.Custody = Custody;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int" }),
    __metadata("design:type", Number)
], Custody.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "char", length: 10 }),
    __metadata("design:type", String)
], Custody.prototype, "asset_ticker", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20 }),
    __metadata("design:type", String)
], Custody.prototype, "asset_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 30 }),
    __metadata("design:type", String)
], Custody.prototype, "asset_sector", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Custody.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Custody.prototype, "total_invested", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Custody.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.custody),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", User_1.User)
], Custody.prototype, "user", void 0);
exports.Custody = Custody = __decorate([
    (0, typeorm_1.Entity)("custody")
], Custody);
