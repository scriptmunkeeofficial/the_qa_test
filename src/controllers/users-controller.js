const UsersModel = require('../models/users-model');
const async = require('async');
const querystring = require('querystring');
const url = require('url');

// Get all the users
exports.getUsers = function(req, res, next) {
    async.parallel({
        // db call to the model
        user_list: function(callback) {
            UsersModel.fetchAll()
                .then( function(users) {
                    callback(null, users.serialize());
                });
        }
    }, function(err, results) {
        if (!err) {
            // console.log(results);
            res.render('users/index', { error: err, data: results} );
        } else {
            console.error(err);
            return next(err);
        }
    });
};

// Get a specific user
exports.get_user = function(req, res, next) {
    // console.log(req.originalUrl);
    // console.log(url.parse(req.originalUrl));
    // console.log(querystring.parse(url.parse(req.originalUrl).query));
    let query_params = querystring.parse(url.parse(req.originalUrl).query);
    console.log(query_params);

    async.parallel({
        user: function(callback) {
            UsersModel
                .where( {'user_id': req.params.id})
                .fetch( {require: true} )
                .then( function(user) {
                    callback(null, user.serialize());
                });
        }
    }, function(err, results) {
        if (!err) {
            // console.log(results);
            res.render('users/details', {error: err, data: results} );
        } else {
            console.error(err);
            return next(err);
        }
    });
};

// Create a user
exports.create_user = function(req, res) {};

// Update a user
exports.update_user = function(req, res) {};

// Activate/Deactive a user
exports.set_user_stats = function(req, res) {};

