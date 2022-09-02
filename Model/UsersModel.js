const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
 name: {
  type: String,
  required: true
 },
 email: {
  type: String,
  lowercase: true,
  unique: true,
 },
 password: {
  type: String
 },
 phoneNumber: {
  type: String,
  required: true,
 },
 balance: {
  type: Number,
  required: true,

 },
 addMoney: [
 ],
 sendMoney: [
 ],
 addBankAccount: [
 ],
 favoritesAccount: [

 ],
 transactions: [

 ],

}, { timestamps: true });

module.exports = mongoose.model("Users", Users);