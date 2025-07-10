import { DataSource } from "typeorm";
import { User } from "../entities/User";
require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [User],
    migrations: ["dist/database/migrations/*.js"],
    synchronize: process.env.DB_SYNC === "true"
});