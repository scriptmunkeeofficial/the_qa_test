// TODO: move this to a library or utility directory

const path = require('path');
const fs = require('fs');
const dbFile = path.join(__dirname, '../../db/qaTestDB.sqlite3')

// TODO: create a config to read from

// SQLite connections
const sqlite_options = {
    client: 'sqlite3',
    connection: { filename: dbFile }
}

// MySQL
const mysql = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    database: 'the_qa_test',
    user:     'qa_test',
    password: 'qa_test'
  }
};

const knex = require('knex')(sqlite_options)
    , bookshelf = require('bookshelf')(knex);

// create a schema if no db found
fs.exists(dbFile, function(exists) {
    if (!exists) {
        console.error('No Database is available\nPlease run:\n\tnpm run db-setup');
        console.log(path.dirname(__dirname));
        console.log(path.dirname(dbFile).split(path.sep).pop());
        console.log(path.basename(dbFile) );
        console.log(path.parse(dbFile));
    }
})

module.exports = bookshelf
