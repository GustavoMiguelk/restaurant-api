import { Router } from "express";
import { ProductsController } from "../controllers/products-controller";

export const productsRoutes = Router()

const productController = new ProductsController()

productsRoutes.get("/products", productController.index)

productsRoutes.post("/products", productController.create)

productsRoutes.put("/products/:id", productController.update)

productsRoutes.delete("/products/:id", productController.remove)