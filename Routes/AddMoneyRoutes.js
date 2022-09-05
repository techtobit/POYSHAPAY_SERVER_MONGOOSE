const express = require('express');
const router = express.Router();
const { addMoneyBank,
 addMoneyStripe
} = require('../Controller/AddMoneyController');

router.put('/addMoneyBank/:id', addMoneyBank)
router.put('/addMoneyStripe/:id', addMoneyStripe)

module.exports = router;