var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


function newRouter(router) {
    return async function (req, res, next) {
        try {
            return await router(req, res, next);
        } catch (e) {
            res.send({
                code: 1,
                msg: e.message
            });
        }
    };
}
let router = express.Router();
router.get('/', newRouter(require('./routes/index')));
app.use('/', router);

router = express.Router();
router.get('/', newRouter(require('./routes/trade')));
app.use('/trade', router);

router = express.Router();
router.get('/', newRouter(require('./routes/balance')));
app.use('/balance', router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;