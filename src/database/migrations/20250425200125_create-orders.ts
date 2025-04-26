import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("orders", (table) => {
        table.increments("id").primary(),
        table.text("client_name").notNullable(),
        table.text("order_status").checkIn(['open', 'closed']).defaultTo("open"),

        table.integer("table_id").references("id").inTable("tables"),
        table.integer("product_id").references("id").inTable("products")
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("orders")
}

