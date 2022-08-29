const express = require('express');
const router = express.Router();

const { pushSendMoneyData } = require('../Controller/SendMoneyController');

router.put('/:id', pushSendMoneyData)

module.exports = router;

