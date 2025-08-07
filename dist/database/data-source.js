"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Operation_1 = require("../entities/Operation");
const Custody_1 = require("../entities/Custody");
const BrokerageNote_1 = require("../entities/BrokerageNote");
require("dotenv").config();
// const isCompiled = __dirname.includes("dist");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: [User_1.User, Operation_1.Operation, Custody_1.Custody, BrokerageNote_1.BrokerageNote],
    migrations: ["dist/database/migrations/*.js"],
    synchronize: process.env.DB_SYNC === "true"
});
