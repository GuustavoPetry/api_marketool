import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { plainToInstance } from 'class-transformer';
import { User } from "../entities/User";

const serverError:string = "Falha na Conexão com o Servidor"
const notFound:string = "Recurso Não Encontrado"

export const UserController = {
    getAll: async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await UserService.getAll();
            res.status(200).json(users);
        } catch {
            res.status(500).json({erro: serverError})
        }
    },

    getOne: async (req: Request, res: Response): Promise<void> => {
        const user = await UserService.getOne(Number(req.params.id));
        if(!user) res.status(404).json({erro: notFound});

        res.status(200).json(user);
    },

    create: async (req: Request, res: Response): Promise<void> => {
        try {
            // converte string em objeto Date de forma automática
            const userData = plainToInstance(User, req.body);

            console.log(userData.birthDate instanceof Date); // true
            console.log(typeof userData.birthDate); // date
            console.log(userData.birthDate);

            const user = await UserService.create(req.body);
            res.status(201).json(user);
        } catch {
            res.status(500).json({erro: serverError});
        }
    },

    update: async (req: Request, res: Response): Promise<void> => {
        const user = await UserService.update(Number(req.params.id), req.body);
        if(!user) res.status(404).json({erro: notFound});

        res.status(200).json(user);
    },

    delete: async (req: Request, res: Response): Promise<void> => {
        const user = await UserService.delete(Number(req.params.id));
        if(!user) res.status(404).json({erro: notFound});

        res.status(200).json({status: "Usuário Removido com Sucesso", user: user});
    }
}