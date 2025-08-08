import { Router } from "express";
import { OperationController } from "../controllers/OperationController";

const routes = Router();

routes.post("/", OperationController.addOperation);

export default routes;