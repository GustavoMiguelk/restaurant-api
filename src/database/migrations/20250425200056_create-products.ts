import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("products", (table) => {
        table.increments("id").primary(),
        table.text("product_name").notNullable(),
        table.integer("price").notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("products")
}

