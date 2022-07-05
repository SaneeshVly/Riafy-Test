var express = require('express');
var router = express.Router();
var bodyValidator = require('../common/bodyValidator');
const nseStocksTable = require('../models/nseStocksTable');

router.post('/dropDownApi/:searchKey', async function (req, res, next) {
    try {
        let body={};
        if(!req.params.searchKey){
            res.status(200).json({ status: false });
        } else {
            body['Name']= { $regex: new RegExp('.*' + req.params.searchKey + '.*', 'i') }
        }
        let doc = await nseStocksTable.find(body).select('Name');
        res.status(200).json({ status: true, doc: doc });
    } catch (err) {
      console.log(err);
    }
});
router.post('/searchApi', function (req, res, next) {
    req.var={};
    req.var.parameterList =
        [
            { "name": "name", "type": "string", "isRequired": true },
        ]
    next();
},  bodyValidator.validate,async function (req, res, next) {
    try {
        let doc = await nseStocksTable.findOne({Name:req.body.name});
        if(doc) {
        res.status(200).json({ status: true, doc: doc });
        } else {
            res.status(200).json({ status: false, message: 'Invalid Name' });
        }
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;
