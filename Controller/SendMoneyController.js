const mongoose = require('mongoose');
const usersModel = require('../Model/UsersModel')

//push new Send Money data inside user data
const pushSendMoneyData = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: 'User data not found' })
  }
  const { sendTo, sendFrom, sendAmount, Reference } = req.body;
  const sendedAmount = parseInt(sendAmount)

  try {
    const mainBalance = await usersModel.findOne({ id })
    const accountBalance = parseInt(mainBalance.balance);
    if (accountBalance >= sendedAmount) {
      const newBalance = parseInt(accountBalance - sendedAmount);
      createdAt = new Date()
      const sendMoneyData = await usersModel.updateMany({ id },
        {
          balance: newBalance,
          $push: {
            sendMoney: {
              sendTo, sendFrom, sendAmount, Reference, createdAt
            },
            transactions: {
              sendTo, sendFrom, sendAmount, Reference, transactions: "sendMoney", createdAt
            }
          }
          
        }
      )
      console.log(sendMoneyData)
      res.status(200).json(sendMoneyData)
        ;
    } else {
      res.status(400).json({ error: "Sorry Insufficient balance" })
      console.log("Sorry Insufficient balance")
    }

  } catch (error) {
    res.status(400).json({ error: error.massage })
  }
}

module.exports = {
  pushSendMoneyData
}