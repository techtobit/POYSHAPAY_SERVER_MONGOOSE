const mongoose = require('mongoose');
const usersModel = require('../Model/UsersModel');

//push new data inside user data
const pushAddMoneyData = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: 'User data not found' })
  }
  const { bankName, bankAccountNumber, addAmount, Reference } = req.body;
  const requestAddAmount = parseInt(addAmount)

  try {
    const mainBalance = await usersModel.findOne({ id })
    const accountBalance = parseInt(mainBalance.balance);

    if (requestAddAmount) {
      const newBalance = parseInt(accountBalance + requestAddAmount);
      createdAt = new Date()

      const addMoneyBank = await usersModel.updateMany({ id },
        {
          balance: newBalance,
          $push: {
            addMoney: {
              bankName, bankAccountNumber, addAmount, Reference, createdAt
            },
            transactions: {
              bankName, bankAccountNumber, addAmount, Reference, transactions: "addMoneyBank", createdAt
            }
          }
        }
      )
      console.log(addMoneyBank)
      res.status(200).json(addMoneyBank)

    } else {
      res.status(400).json({ error: "Sorry,You have deposit min 10 USD " })
      res.status(400).json({ error: "Request Unsuccessful" })
    }

  } catch (error) {
    res.status(400).json({ error: "Request Unsuccessful" })
  }
}

module.exports = {
  pushAddMoneyData
}