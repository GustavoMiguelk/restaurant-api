import { Request, Response } from "express";
import { knex } from "../database/knex";

export class TableController{

    async index(request:Request, response:Response){
        const tables = await knex("tables").select()

        response.json(tables)
    }

    async create(request:Request, response:Response){
        const { id } = request.body

        await knex("tables").insert({ id })

        response.json("Nova mesa adicionada.")
    }

    async update(request:Request, response:Response){
        
    }

    async remove(request:Request, response:Response){
        const { id } = request.params

        await knex("tables").delete().where({ id })

        response.json("Mesa excluida com sucesso.")
    }

}