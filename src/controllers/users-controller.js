const UsersModel = require('../models/users-model');
const async = require('async');

exports.getUsers = function(req, res) {
    async.parallel({
        // db call to the model
        user_list: function(callback) {
            UsersModel.fetchAll()
                .then( function(users) {
                    callback(null, users.serialize());
            })
        }
    }, function(err, results) {
        if (!err) {
            // console.log(results);
            res.render('users/index', { error: err, data: results} );
        }
    });
};
