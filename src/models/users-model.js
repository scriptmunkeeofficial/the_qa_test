const db = require('./db-connector');

var Users = db.model('Users', {
    tableName: 'users',
    hasTimeStamps: true
});

module.exports = Users
