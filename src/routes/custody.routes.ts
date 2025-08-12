import { Router } from "express";
import { CustodyController } from "../controllers/CustodyController";

const routes = Router();
const custodyController = new CustodyController();

routes.get("/:userId", custodyController.getUserCustody);

export default routes;