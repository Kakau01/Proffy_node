import Knex from 'knex';

//quais alterações quer realizar no banco de dados
export async function up(knex: Knex) {
    //onde colocaremos os campos da tabela
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        //RELACIONAMENTO
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

//desfaz as alterações no banco de dados
export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}