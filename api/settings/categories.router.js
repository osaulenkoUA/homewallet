const express = require('express');

const {
    addCategory, getCategories,updateCategory
} = require('./categories.controller.js');

const category = express.Router();

category.post('/addCategory', addCategory);
category.get('/getCategories', getCategories);
category.put('/updateCategory', updateCategory);


module.exports = category;
