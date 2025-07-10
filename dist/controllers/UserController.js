"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
const class_transformer_1 = require("class-transformer");
const User_1 = require("../entities/User");
const serverError = "Falha na Conexão com o Servidor";
const notFound = "Recurso Não Encontrado";
exports.UserController = {
    getAll: async (req, res) => {
        try {
            const users = await UserService_1.UserService.getAll();
            res.status(200).json(users);
        }
        catch {
            res.status(500).json({ erro: serverError });
        }
    },
    getOne: async (req, res) => {
        const user = await UserService_1.UserService.getOne(Number(req.params.id));
        if (!user)
            res.status(404).json({ erro: notFound });
        res.status(200).json(user);
    },
    create: async (req, res) => {
        try {
            // converte string em objeto Date de forma automática
            const userData = (0, class_transformer_1.plainToInstance)(User_1.User, req.body);
            console.log(userData.birthDate instanceof Date); // true
            console.log(typeof userData.birthDate); // date
            console.log(userData.birthDate);
            const user = await UserService_1.UserService.create(req.body);
            res.status(201).json(user);
        }
        catch {
            res.status(500).json({ erro: serverError });
        }
    },
    update: async (req, res) => {
        const user = await UserService_1.UserService.update(Number(req.params.id), req.body);
        if (!user)
            res.status(404).json({ erro: notFound });
        res.status(200).json(user);
    },
    delete: async (req, res) => {
        const user = await UserService_1.UserService.delete(Number(req.params.id));
        if (!user)
            res.status(404).json({ erro: notFound });
        res.status(200).json({ status: "Usuário Removido com Sucesso", user: user });
    }
};
