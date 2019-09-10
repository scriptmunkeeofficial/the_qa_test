// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            // filename: './db/qaTestDB.sqlite3'
            filename: './qaTestDB.sqlite3'
        },
        useNullAsDefault: true,
        migrations: {
            tableName: 'migrations',
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        }
    },

    production: {
        cdlient: 'mysql',
        connection: {
            host:     'localhost',
            database: 'the_qa_test',
            user:     'qa_test',
            password: 'qa_test'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations',
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        }
    }

};
