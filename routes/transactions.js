const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Transaction = require('../models/Transaction');

// Create Transaction
router.post('/', auth, async (req, res) => {
    try {
        const { title, amount } = req.body;
        const newTransaction = new Transaction({ title, amount, userId: req.user.id });
        const transaction = await newTransaction.save();
        res.json(transaction);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get All Transactions for logged in user
router.get('/', auth, async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.id });
        res.json(transactions);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;