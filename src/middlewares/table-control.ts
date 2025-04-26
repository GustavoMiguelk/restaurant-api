import { NextFunction, Request, Response } from "express"
import { knex } from "../database/knex"

export async function controlTable(request: Request, response:Response, next:NextFunction){
    const { id } = request.params
    const status = await knex("tables").select("table_status").where({ id })

    if(status.length > 0 && status[0].table_status === 'open'){
        const table_status = 'closed'
        await knex("tables").update({ table_status }).where({id})
    } 
    else 
    {
        const table_status = 'open'
        await knex("tables").update({ table_status }).where({id})
    }

    return next()
}