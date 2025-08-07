"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const brappi_routes_1 = __importDefault(require("./routes/brappi.routes"));
const data_source_1 = require("./database/data-source");
require("dotenv").config();
const cors = require("cors");
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    const origins = ["https://localhost:4000"];
    // Cors deve ser implementado antes de qualquer rota
    app.use(cors({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            if (origins.includes(origin)) {
                return callback(null, true);
            }
            else {
                return callback(new Error("Origem não permitida"));
            }
        },
        credentials: true,
        methods: ["GET, POST, PUT, PATCH, DELETE"],
        allowedHeader: ["Content-Type", "Authorization"]
    }));
    app.use("/users", user_routes_1.default);
    app.use("/auth", auth_routes_1.default);
    app.use("/brappi", brappi_routes_1.default);
    app.listen(process.env.API_PORT, () => {
        console.log("Servidor Rodando na Porta :", process.env.API_PORT);
        console.log("Banco de Dados Conectado na Porta :", process.env.DB_PORT);
    });
})
    .catch((error) => console.error("Conexão NÃO Estabelecida | ERRO: ", error));
