import { Request, Response } from "express"
import { knex } from "../database/knex"

export class ProductsController{
    async index(request:Request, response:Response){
        const products = await knex("products").select()

        response.json(products)
    }

    async create(request:Request, response:Response){
        const {product_name, price} = request.body

        await knex("products").insert({product_name, price})

        response.status(201).json("Produto Adicionado!")
    }

    async update(request:Request, response:Response){
        const { id } = request.params
        const {product_name, price } = request.body

        await knex("products").update({product_name, price}).where({id})

        response.status(201).json(`O Produto ${id} foi atualizado com sucesso!`)
    }

    async remove(request:Request, response:Response){
        const { id } = request.params

        await knex("products").delete().where({ id })

        response.json(`O Produto ${id} foi deletado`)
    }

}