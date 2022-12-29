// const axios = require('axios');
const date = require('date-and-time');
const financeModel = require('./finance.model.js');

async function addTransaction(req, res, next) {
    try {
        req.body.date = date.format(new Date(), 'DD-MM-YYYY');
        const tr = await financeModel.create(req.body);
        return res.status(201).json(tr);
    } catch (err) {
        next(err);
    }
}

async function getTransaction(req, res, next) {
    try {

        const tr = await financeModel.find();
        return res.status(200).json(tr);
    } catch (err) {
        next(err);
    }
}


module.exports = {
    addTransaction,
    getTransaction
};
