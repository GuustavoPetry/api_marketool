import { Router } from "express";
import { ProfitController } from "../controllers/ProfitController";

const routes = Router();
const controller = new ProfitController();

routes.get("/:userId", controller.getUserCustodyWithProfit);

export default routes;