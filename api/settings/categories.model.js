const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    category: {type: String, required: true},
    description: {type: Array, required: false},
});

async function findCategory(category) {
    return this.findOne({category});
}

async function updateDescription(data, newItem) {
    return this.findByIdAndUpdate(data.id, {
       description: [...data.description, ...newItem.description],
    });
}


categorySchema.statics.findCategory = findCategory
categorySchema.statics.updateDescription = updateDescription

const categoriesModel = mongoose.model('Categorie', categorySchema);

module.exports = categoriesModel;
