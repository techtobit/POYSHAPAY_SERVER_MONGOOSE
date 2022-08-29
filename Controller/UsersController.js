const mongoose = require('mongoose');
const userModel = require('../Model/UsersModel');

//Load all users
const getUsers = async (req, res) => {
 const loadUsers = await userModel.find({});
 res.status(200).json(loadUsers);
}

//get single User
const getUser = async (req, res) => {
 const { email } = req.params;

 if (!email) {
  res.status(404).json({ error: "User Email is Not Found" })
 }

 const loadUser = await userModel.findOne({ email: email });

 if (!loadUser) {
  res.status(404).json({ error: "User Not Found" });
 }
 res.status(200).json(loadUser);

}


//Post & Save user After SingUp
const createUser = async (req, res) => {
 const { name, email, password, phoneNumber, balance, SendMoney, addAccount, bankAccount, transactions } = req.body;

 try {
  userModel.findOne({ email: email }).then((async user => {
   if (user) {
    return res.status(400).json({ error: "A user already have with this account" })
   }
   createdAt = new Date()
   const addUser = await userModel.create({ name, email, password, phoneNumber, balance, SendMoney, addAccount, bankAccount, transactions, createdAt });
   addUser.save();
   res.status(200).json(addUser);

  }))

 } catch (error) {
  res.status(400).json({ error: error.massage });
 }
}


module.exports = {
 getUsers,
 getUser,
 createUser
}