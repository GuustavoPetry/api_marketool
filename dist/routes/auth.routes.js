"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const routes = (0, express_1.Router)();
routes.post("/", AuthController_1.AuthController.login);
exports.default = routes;
