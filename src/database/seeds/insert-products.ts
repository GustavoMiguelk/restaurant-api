import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("products").insert([
        { 'product_name': 'Spaghetti à Bolonhesa', price: 35 },
        { 'product_name': 'Risoto de Frango', price: 40 },
        { 'product_name': 'Filé Mignon com Batatas', price: 70 },
        { 'product_name': 'Salmão Grelhado', price: 65 },
        { 'product_name': 'Frango à Parmegiana', price: 45 },
        { 'product_name': 'Hambúrguer Artesanal', price: 30 },
        { 'product_name': 'Pizza Margherita', price: 50 },
        { 'product_name': 'Ceviche de Tilápia', price: 55 },
        { 'product_name': 'Escondidinho de Carne Seca', price: 42 },
        { 'product_name': 'Lasanha Quatro Queijos', price: 48 },
    ]);
};
