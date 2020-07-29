const express = require('express');
const morgan = require('morgan')
const favicon = require('serve-favicon');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

const app = express();
// app.use(express.static('public'));
// app.set('views', __dirname+'/views/');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan('combined')) // Apache style logging
app.use(morgan('dev'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// main GET response
app.get('/', function (req, res, next) {
    res.render('index');
});

app.get('/login', function (req, res, next) {
    res.send('Login Page');
    //res.render('login_page');
});

// using User route
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// app.get('/users#<{(|', function (req, res, next) {
//     res.send('Users Page');
//     //res.render('user_page');
// });

app.get('/about', function (req, res, next) {
    res.render('about');
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });

// error handling
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.log(res.locals.message);
    console.log(res.locals.error);

    // render the error page
    res.status(err.status || 500);
    // TODO: handle data sent to error page
    res.render('error', [res.locals.error, res.locals.message]);
});

var serv = app.listen(3000, function () {
    var host = serv.address().address;
    var port = serv.address().port;

    console.log('Example app listening on port 3000!')
    console.log("Example app listening at http://%s:%s", host, port)
})
