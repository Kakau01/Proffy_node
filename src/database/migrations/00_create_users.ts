import Knex from 'knex';

//quais alterações quer realizar no banco de dados
export async function up(knex: Knex) {
    //onde colocaremos os campos da tabela
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

//desfaz as alterações no banco de dados
export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}