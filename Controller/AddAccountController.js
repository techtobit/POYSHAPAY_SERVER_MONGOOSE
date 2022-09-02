const mongoose = require('mongoose');
const userModel = require('../Model/UsersModel');

const getBankAccounts = async (req, res) => {
 const { id } = req.params;
 const loadBankAccounts = await userModel.findOne({ id }, {
  // $elemMatch: { addBankAccount } 
 });
 res.status(200).json(loadBankAccounts);
}

const addBankAccounts = async (req, res) => {
 const { id } = req.params;

 if (!mongoose.Types.ObjectId.isValid(id)) {
  res.status(400).json({ error: "User Id Is not Valid" })
 }
 createdAt = new Date()
 const { bankName, bankAccountNumber, origin, bankBalance } = req.body;
 try {
  const addAccounts = await userModel.updateOne({ id },
   {
    $push: {
     addBankAccount: {
      bankName, bankAccountNumber, origin, bankBalance, createdAt
     }
    }
   }
  )
  res.status(200).json(addAccounts)
 } catch (error) {
  res.status(400).json({ error: error.massage })
 }
}
module.exports = {
 addBankAccounts,
 getBankAccounts
}