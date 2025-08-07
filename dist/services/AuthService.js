"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const data_source_1 = require("../database/data-source");
const User_1 = require("../entities/User");
const bcrypt = require("bcrypt");
// Falta Implementar => JsonWebToken
const repo = data_source_1.AppDataSource.getRepository(User_1.User);
exports.AuthService = {
    auth: async (email, password) => {
        const user = await repo.findOneBy({ email });
        if (user) {
            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                throw new Error("Credenciais Inválidas");
            }
            return {
                user: {
                    id: user.id,
                    name: user.fullName,
                    email: user.email
                }
            };
        }
    }
};
