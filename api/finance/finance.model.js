const mongoose = require('mongoose');
const {Schema} = mongoose;

const financeSchema = new Schema({
    category: {type: String, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true},
    balance: {type: Number, required: false, default: 0},
    date: {type: String, required: false}
});

const financeModel = mongoose.model('Finance', financeSchema);

module.exports = financeModel;
