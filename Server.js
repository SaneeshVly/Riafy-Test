const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const compression = require('compression');
const helmet = require('helmet');
const config = require('./config/config');

var app = express();
app.use(compression());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(helmet());
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect( "mongodb://" + config.getConfig('dbusername') + ":" + config.getConfig('dbpassword') + "@64.227.164.4:27017/" + config.getConfig('database') + '?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log("db connected")
    }).catch(err => {
        console.log("err occured in db connection", err);
    })
mongoose.set('useCreateIndex', true);
mongoose.connection.once('open', function () {
}).on('error', function (error) {
    console.log('Error in Connection With Mongodb:', error);
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH');
        return res.status(200).json({});
    }
    next();
});
// app.use(common.activityLog);
process.on('uncaughtException', function (err) {
    console.log(err);
}).on('unhandledRejection', (err, p) => {
    console.log(err);
}).on('warning', (err) => {
    console.log(err);
});

const index = require('./routes/');
app.use('', index);
var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

app.get('*', (req, res) => {
    res.render('index', { req });
});
app.listen(config.getConfig('port'), function (req, res) {
    console.log('Express server listening on port ' + config.getConfig('port'));
});
module.exports = app;