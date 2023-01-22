// const axios = require('axios');
const date = require('date-and-time');
const financeModel = require('./finance.model.js');

async function addTransaction(req, res, next) {
    try {
        req.body.date = date.format(new Date(), 'DD.MM.YYYY');
        const tr = await financeModel.create(req.body);
        console.log(tr)
        return res.status(201).json(tr);
    } catch (err) {
        return res.status(400).json({erros:err.message,status:400})
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
