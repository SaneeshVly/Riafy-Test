var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('cookie-session')

var indexRouter = require('./routes/nseStocks');
const config = require('./config/config');
var app = express();
let http = require('http');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const mongoose = require('mongoose');
mongoose.connect( "mongodb://" + config.getConfig('dbusername') + ":" + config.getConfig('dbpassword') + "@64.227.164.4:27017/" + config.getConfig('database') + '?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log("db connected")
    }).catch(err => {
        console.log("err occured in db connection", err);
    })
// mongoose.set('useCreateIndex', true);
mongoose.connection.once('open', function () {
}).on('error', function (error) {
    console.log('Error in Connection With Mongodb:', error);
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// app.use('/nseStocks', indexRouter);

const index = require('./routes/');
app.use('', index);


app.listen(4000, function (req,res) {
    console.log('Express server listening on port 3000');
});

module.exports = app;
