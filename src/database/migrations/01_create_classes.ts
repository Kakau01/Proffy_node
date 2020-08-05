import Knex from 'knex';

//quais alterações quer realizar no banco de dados
export async function up(knex: Knex) {
    //onde colocaremos os campos da tabela
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        //criando relacionamento
        //qual é o professor da aula
        //vai gerar uma chave estrangeira
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            //opcao Cascade vai atualizar ou delatar todas as aulas do professor
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

//desfaz as alterações no banco de dados
export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}