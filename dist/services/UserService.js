"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../database/data-source");
const User_1 = require("../entities/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const repo = data_source_1.AppDataSource.getRepository(User_1.User);
exports.UserService = {
    getAll: async () => {
        return await repo.find();
    },
    getOne: async (id) => {
        return await repo.findOneBy({ id });
    },
    create: async (data) => {
        data.password = await bcrypt.hash(data.password, saltRounds);
        const user = repo.create(data);
        await repo.save(user);
        return user;
    },
    update: async (id, data) => {
        if (data.password)
            data.password = await bcrypt.hash(data.password, saltRounds);
        const user = await repo.findOneBy({ id });
        if (!user)
            return null;
        repo.merge(user, data);
        await repo.save(user);
        return user;
    },
    delete: async (id) => {
        const user = await repo.findOneBy({ id });
        if (!user)
            return null;
        await repo.remove(user);
        return user;
    }
};
