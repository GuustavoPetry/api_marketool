import express from "express";
import "reflect-metadata";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import brappiRoutes from "./routes/brappi.routes";
import { AppDataSource } from "./database/data-source";
require("dotenv").config();
const cors = require("cors");

    const PORT = process.env.PORT || 3000;
    const app = express();
    app.use(express.json());

    const origins = ["https://localhost:4000"];
    // Cors deve ser implementado antes de qualquer rota
    app.use(cors({
        origin: (origin:string, callback:Function) => {
            if(!origin) return callback(null, true);

            if(origins.includes(origin)) {
                return callback(null, true);
            } else {
                return callback(new Error("Origem não permitida"));
            }
        },
        credentials: true,
        methods: ["GET, POST, PUT, PATCH, DELETE"],
        allowedHeader: ["Content-Type", "Authorization"]
    }));

    app.use("/users", userRoutes);
    app.use("/auth", authRoutes);
    app.use("/brappi", brappiRoutes);
    app.listen(PORT, () => {
        console.log("Servidor Rodando na Porta :", PORT);
        console.log("Banco de Dados Conectado na Porta :", process.env.API_PORT);
    });
        