import { Request, Response } from "express"
import { knex } from "../database/knex"

export class OrdersController{
    async index(request:Request, response:Response){
        const orders = await knex("orders").select()
    
        response.json(orders)
    }

    async show(request:Request, response:Response){
        const { order_status } = request.query
        const orders = await knex("orders").select().where({ order_status })
            
        response.json(orders)
    }

    async create(request:Request, response:Response){
        const { id } = request.params
        const { client_name, table_id, product_id } = request.body
        
        await knex("orders").insert({ client_name, table_id, product_id})
        
        response.status(201).json(`A Mesa ${id} teve seu status atualizado.`)
    }

    async update(request:Request, response:Response){
        const { id } = request.params
        const { client_name, product_id } = request.body
        
        await knex("orders").update({ client_name, product_id }).where({ id })
        
        response.json("Dados alterados com sucesso.")
    }

    async patch(request:Request, response:Response){
        const { id } = request.params
        const order_status = "closed"
    
        await knex("orders").update({ order_status }).where({ id })
    
        response.json("A Conta foi encerrada.")
    }

    async remove(request:Request, response:Response){
        const { id } = request.params
        
        await knex("orders").delete().where({ id })
        
        response.json("O pedido foi excluido.")
    }
}