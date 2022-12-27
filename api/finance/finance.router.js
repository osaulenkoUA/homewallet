const express = require('express');

const {
  addTransaction,
} = require('./finance.controller.js');

const userFinance = express.Router();

userFinance.post('/addOperation', addTransaction);

module.exports = userFinance;
