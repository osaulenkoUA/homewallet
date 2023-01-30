const express = require('express');

const {
  addTransaction,
  getTransaction,
  getTransactionByMonth
} = require('./finance.controller.js');

const userFinance = express.Router();

userFinance.post('/addOperation', addTransaction);
userFinance.get('/getOperation', getTransaction);
userFinance.post('/getOperationdByMonth', getTransactionByMonth);

module.exports = userFinance;
