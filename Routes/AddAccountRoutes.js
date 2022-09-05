const express = require('express');
const router = express.Router();
const { 
 addBankAccounts,
 getBankAccounts
} = require('../Controller/AddAccountController')

router.get('/:id', getBankAccounts)
router.put('/:id', addBankAccounts)


module.exports = router;
