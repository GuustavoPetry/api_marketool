import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User";
const bcrypt = require("bcrypt");
// Falta Implementar => JsonWebToken

const repo = AppDataSource.getRepository(User);

export const AuthService = {

    auth: async (email: string, password: string) => {
        const user = await repo.findOneBy({ email });
        if(user) {
            const passwordCompare = await bcrypt.compare(password, user.password);

            if(!passwordCompare) {
                throw new Error("Credenciais Inválidas");
            }

            return {
                user: {
                    id: user.id,
                    name: user.fullName,
                    email: user.email
                }
            }
        }
    }
}