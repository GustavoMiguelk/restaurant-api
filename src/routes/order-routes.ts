import { Router } from "express";
import { controlTable } from "../middlewares/table-control";
import { OrdersController } from "../controllers/orders-controller";

export const orderRoutes = Router()

const orderController = new OrdersController()

// Lista todos os pedidos
orderRoutes.get("/orders", orderController.index)

// Lista todos os pedidos ja encerrados
orderRoutes.get("/orders", orderController.show)

// Cria um novo pedido
orderRoutes.post("/orders/:id", controlTable ,orderController.create)

// Atualiza o pedido
orderRoutes.put("/orders/:id", orderController.update)

// Atualiza o Status da mesa
orderRoutes.patch("/orders/:id", controlTable, orderController.patch)

// Exclui o pedido
orderRoutes.delete("/orders/:id", controlTable , orderController.remove)

