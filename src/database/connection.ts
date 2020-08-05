import knex from 'knex';
//modulo integrado dentro do node para poder caminhar pelos caminhos da app
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    //jogar null nos valores dos campos que nao forem preenchidos
    useNullAsDefault: true,
});

export default db;