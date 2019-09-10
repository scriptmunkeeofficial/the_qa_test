
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments('user_id').primary()
        table.string('f_name')
        table.string('l_name')
        table.string('user_name').unique()
        table.string('email').unique()
        table.string('password')
        table.string('role')
        table.boolean('active')
        table.timestamps()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
