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
exports.User = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const BrokerageNote_1 = require("./BrokerageNote");
const Custody_1 = require("./Custody");
let User = class User {
    id;
    // Nome Completo
    fullName;
    // Documento CPF
    cpf;
    // Data de Nascimento
    birthDate;
    // E-mail
    email;
    // Credencial de Acesso
    password;
    brokerageNotes;
    custody;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int" }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "char", length: 11 }),
    __metadata("design:type", String)
], User.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    (0, class_transformer_1.Type)(() => Date) // converte string em objeto Date de forma automática
    ,
    __metadata("design:type", Date)
], User.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 150 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BrokerageNote_1.BrokerageNote, note => note.user),
    __metadata("design:type", Array)
], User.prototype, "brokerageNotes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Custody_1.Custody, custody => custody.user),
    __metadata("design:type", Array)
], User.prototype, "custody", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
