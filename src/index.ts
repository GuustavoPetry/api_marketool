import express from "express";
import "reflect-metadata";
import userRoutes from "./routes/user.routes";
import { AppDataSource } from "./database/data-source";
require("dotenv").config();

AppDataSource.initialize()
        .then(() => {
            const app = express();
            app.use(express.json());
            app.use("/users", userRoutes);
            app.listen(process.env.API_PORT, () => {
                console.log("Servidor Rodando na Porta :", process.env.API_PORT);
                console.log("Banco de Dados Conectado na Porta :", process.env.DB_PORT);
            });
        })
        .catch((error) => console.error("Conexão NÃO Estabelecida | ERRO: ", error));