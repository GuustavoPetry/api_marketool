import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();

routes.get("/", UserController.getAll);
routes.get("/:id", UserController.getOne);
routes.post("/", UserController.create);
routes.put("/:id", UserController.update);
routes.delete("/:id", UserController.delete);

export default routes;