import { Router } from "express";
import { BrappiController } from "../controllers/BrappiController";

const routes = Router();

routes.get("/assets", BrappiController.searchAssets);
routes.get("/assets/:ticker", BrappiController.getOneAsset);

export default routes;
