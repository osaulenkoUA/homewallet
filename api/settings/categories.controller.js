const categoriesModel = require('./categories.model.js');

async function addCategory(req, res, next) {
    try {
        const category = await categoriesModel.create(req.body);
        return res.status(201).json(category);
    } catch (err) {
        next(err);
    }
}


async function getCategories(req, res, next) {
    try {
        const categories = await categoriesModel.find();
        return res.status(200).json(categories);
    } catch (err) {
        next(err);
    }
}

async function updateCategory(req, res, next) {
    try {
        const currentCategory = await categoriesModel.findCategory(req.body.category)
        await categoriesModel.updateDescription(currentCategory, req.body)
        const categories = await categoriesModel.find();
        return res.status(202).json(categories);
    } catch (err) {
        next(err);
    }
}


module.exports = {
    addCategory,
    getCategories,
    updateCategory
};
