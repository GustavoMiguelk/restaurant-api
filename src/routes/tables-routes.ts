import { Router } from "express";
import { TableController } from "../controllers/table-controller";

export const tableRoutes = Router()

const tableController = new TableController()

tableRoutes.get("/tables", tableController.index)

tableRoutes.post("/tables", tableController.create)

tableRoutes.delete("/tables/:id", tableController.remove)