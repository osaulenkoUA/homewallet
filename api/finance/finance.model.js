const mongoose = require('mongoose');
const {Schema} = mongoose;

const financeSchema = new Schema({
    category: {type: String, required: false},
    description: {type: String, required: false},
    amount: {type: Number, required: false},
    balance: {type: Number, required: false, default: 0},
    date: {type: String, required: false},
    isPayByCard: {type: Boolean, required: false, default: true}
});


async function updateFields(data) {
    return this.findByIdAndUpdate(data.id, data);
}

financeSchema.statics.updateFields = updateFields
const financeModel = mongoose.model('Finance', financeSchema);

module.exports = financeModel;
