"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BrappiController_1 = require("../controllers/BrappiController");
const routes = (0, express_1.Router)();
routes.get("/assets", BrappiController_1.BrappiController.searchAssets);
routes.get("/assets/:ticker", BrappiController_1.BrappiController.getOneAsset);
exports.default = routes;
