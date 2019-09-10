
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
          {f_name: 'Admin', l_name: 'User', user_name: 'admin', email: 'admin@theqatest.net', password: 'P@ssw0rd', role: 'admin', active: true},
          {f_name: 'Sam', l_name: 'Smith', user_name: 'sam', email: 'samiam@gmail.com', password: 'SamIam', role: 'user', active: true}
      ]);
    });
};
