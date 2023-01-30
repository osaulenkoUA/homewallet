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


async function getTransactionByMonth(req, res, next) {
    try {
        const dateM=req.body.date;
        console.log(dateM)
        const month = date.transform(dateM, 'DD.MM.YYYY', 'MMMM');
        // const tr = await financeModel.find();
        // req.body.date = date.format(new Date(), 'DD.MM.YYYY');
        // const tr = await financeModel.create(req.body);
        // console.log(tr)
        return res.status(200).json(month);
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
    getTransaction,
    getTransactionByMonth
};
