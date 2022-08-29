const express = require('express');
const router = express.Router();
const { addBankAccounts } = require('../Controller/AddAccountController')

router.put('/:id', addBankAccounts)

module.exports = router;
