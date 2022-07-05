
var express= require("express");
var routes = express.Router();
const nseStocks = require('./nseStocks');
routes.use('/nseStocks', nseStocks);
module.exports = routes;