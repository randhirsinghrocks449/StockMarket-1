const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/stockdatabase', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })

const Schema = new mongoose.Schema({
    name: {
        type: String
    },
    symbol: {
        type: String
    },
    current_price: {
        type: String
    },
    market_cap: {
        type: String
    },
    isPurchased: {
        type: Boolean,
        default: false
    }
}, { versionKey: false })

const StockDetail = mongoose.model('StockDetail', Schema);



app.post("/savestock", (req, res) => {
    const addData = new StockDetail({
        name: req.body.name,
        symbol: req.body.symbol,
        current_price: req.body.current_price,
        market_cap: req.body.market_cap,
        isPurchased: req.body.isPurchased,
    })

    addData.save().then((result) => {
        console.log(result);
    })

});

app.get('/getStocklist', (req, res) => {
    StockDetail.find().then((result) => {
        res.json(result);
        console.log(result);
    })
})

app.delete('/removeStock', (req, res) => {
    StockDetail.deleteOne({ _id: req.body._id }).then((result) => {
        console.log(result);
        res.json(result);
    })
})

app.listen('3001', () => {
    console.log("App is running");
})










