var express = require('express');
var router = express.Router();

var uc = require('../controllers/users-controller');

// reference:
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

router.get('/', uc.getUsers);

// router.get('/users/:userId/', uc.getuser);

module.exports = router;
