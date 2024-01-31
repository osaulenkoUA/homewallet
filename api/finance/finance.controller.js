const date = require('date-and-time');
const financeModel = require('./finance.model.js');

async function addTransaction(req, res) {
    try {
        req.body.date = date.format(new Date(), 'DD.MM.YYYY');
        const tr = await financeModel.create(req.body);
        return res.status(201).json(tr);
    } catch (err) {
        return res.status(400).json({erros: err.message, status: 400})
    }
}



async function getTransactionByMonth(req, res) {
    try {
        const { date, year } = req.body;

        const transactions = await financeModel.aggregate([
            {
                $match: {
                    $expr: {
                        $and: [
                            { $eq: [{ $month: { $toDate: "$date" } }, parseInt(date)] },
                            { $eq: [{ $year: { $toDate: "$date" } }, parseInt(year)] }
                        ]
                    }
                }
            }
        ]);

        return res.status(200).json(transactions);
    } catch (err) {
        console.error("Error in getTransactionByMonth:", err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


async function getTransaction(req, res, next) {
    try {

        const tr = await financeModel.find();
        return res.status(200).json(tr);
    } catch (err) {
        next(err);
    }
}

async function updateSomeFields(req, res, next) {
    try {
        await financeModel.updateFields(req.body)
        const updatedItem = await financeModel.findById(req.body.id)
        return res.status(202).json(updatedItem);
    } catch (err) {
        next(err);
    }
}


module.exports = {
    addTransaction,
    getTransaction,
    getTransactionByMonth,
    updateSomeFields
};
