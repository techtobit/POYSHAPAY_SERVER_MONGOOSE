const express = require('express');
const router = express.Router();
const { pushAddMoneyData } = require('../Controller/AddMoneyController');

router.put('/:id', pushAddMoneyData)

module.exports = router;