
// const dbFile = path.join(__dirname, './db/qaTestDB.sqlite3')
const usersModel = require('../models/users-model');

module.exports = {
    getUsers: () => {
        // var tmp = usersModel.fetchAll()
        usersModel.fetchAll()
            .then( function(u) {
                // console.log('Returned Users:');
                // console.log(u.toJSON());
                // console.log(u);
                return u.toJSON();
            }).catch(function(err) {
                console.error(err);
            // }) .finally( function() {
            //     // usersModel.destroy();
            //     console.log('Oh snap!\nI hope we have data....');
            })
    }
}
