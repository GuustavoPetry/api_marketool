import { AppDataSource } from "../database/data-source"
import { User } from "../entities/User"
const bcrypt = require("bcrypt");
const saltRounds:number = 10;

const repo = AppDataSource.getRepository(User);

export const UserService = {
    getAll: async (): Promise<User[]> => {
        return await repo.find();
    },

    getOne: async (id: number): Promise<User | null> => {
        return await repo.findOneBy({ id });
    },

    create: async (data: Partial<User>): Promise<User> => {
        data.password = await bcrypt.hash(data.password, saltRounds);
        const user = repo.create(data);
        await repo.save(user);
        return user;
    },

    update:  async (id: number, data: Partial<User>): Promise<User | null> => {
        if(data.password) data.password = await bcrypt.hash(data.password, saltRounds);
        const user = await repo.findOneBy({ id });
        if(!user) return null;

        repo.merge(user, data);
        await repo.save(user);
        return user;
    },

    delete: async (id: number): Promise<User | null> => {
        const user = await repo.findOneBy({ id });
        if(!user) return null;

        await repo.remove(user);
        return user;
    }
}