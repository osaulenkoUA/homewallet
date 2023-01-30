const mongoose = require('mongoose');
const {Schema} = mongoose;

const financeSchema = new Schema({
    category: {type: String, required: false},
    description: {type: String, required: false},
    amount: {type: Number, required: false},
    balance: {type: Number, required: false, default: 0},
    date: {type: String, required: false}
});

const financeModel = mongoose.model('Finance', financeSchema);

module.exports = financeModel;
