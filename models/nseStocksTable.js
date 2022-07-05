const mongoose = require('mongoose');
const nseStocksTableSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, default: function () { return new mongoose.Types.ObjectId() } },
    "S.No.": { type: Number, required: true },
    "Name": { type: String, required: true },
    "Current Market Price": { type: Number, required: true },
    "Market Cap": { type: Number, required: true },
    "Stock P/E": { type: Number, required: true },
    "Dividend Yield": { type: Number, required: true },
    "ROCE %": { type: Number, required: true },
    "ROE Previous Annum": { type: Number, required: true },
    "Debt to Equity": { type: Number, required: true },
    "EPS": { type: Number, required: true },
    "Reserves":{ type: Number, required: true },
    "Debt":{ type: Number, required: true },

});
module.exports = mongoose.model('nseStocksTable', nseStocksTableSchema);
