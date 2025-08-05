import { Router } from "express";
import { BrappiController } from "../controllers/BrappiController";

const routes = Router();

routes.get("/assets", BrappiController.getAssets);

export default routes;

