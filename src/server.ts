import express from "express"
import { orderRoutes } from "./routes/order-routes"
import { productsRoutes } from "./routes/products-routes"
import { tableRoutes } from "./routes/tables-routes"

const PORT = 3333

const app = express()

app.use(express.json())


app.use(orderRoutes)
app.use(productsRoutes)
app.use(tableRoutes)


app.listen(PORT, () => console.log(`Server is running at ${PORT}`))