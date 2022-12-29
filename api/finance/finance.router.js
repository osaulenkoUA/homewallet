const express = require('express');

const {
  addTransaction,
  getTransaction
} = require('./finance.controller.js');

const userFinance = express.Router();

userFinance.post('/addOperation', addTransaction);
userFinance.get('/getOperation', getTransaction);

module.exports = userFinance;
