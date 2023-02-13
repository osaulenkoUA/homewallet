const express = require('express');

const {
  addTransaction,
  getTransaction,
  getTransactionByMonth,
  updateSomeFields
} = require('./finance.controller.js');

const userFinance = express.Router();

userFinance.post('/addOperation', addTransaction);
userFinance.get('/getOperation', getTransaction);
userFinance.post('/getOperationdByMonth', getTransactionByMonth);
userFinance.put('/updateFields', updateSomeFields);


module.exports = userFinance;
