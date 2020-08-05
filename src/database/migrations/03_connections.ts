//Armazena se o usuario tentou entrar em contato com o professor
import Knex from 'knex';

//quais alterações quer realizar no banco de dados
export async function up(knex: Knex) {
    //onde colocaremos os campos da tabela
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

   

        //RELACIONAMENTO
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

//desfaz as alterações no banco de dados
export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}