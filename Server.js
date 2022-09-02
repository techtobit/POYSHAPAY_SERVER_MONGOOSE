const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4000;

//routers
const Users = require('./Routes/UsersRoutes');
const SendMoneyRouter = require('./Routes/SendMoneyRoutes')
const AddMoneyRouter = require('./Routes/AddMoneyRoutes');
const AddAccountRoutes = require('./Routes/AddAccountRoutes');


//express app
const app = express();
app.use(cors())

//middleware
app.use(express.json());

app.use((req, res, next) => {
 // console.log(req.path, req.method);
 next();
})


//routes
app.use('/', Users)
app.use('/singUp', Users)
app.use('/sendMoney', SendMoneyRouter)
app.use('/addMoney', AddMoneyRouter)
app.use('/addBankAccounts', AddAccountRoutes)



//connect mongodb with mongoose
mongoose.connect(process.env.MONGODB_URI)
 .then(() => {
  app.listen(port, () => {
   console.log(`Db connected with Db app listening at http://localhost:${port}`);
  })
 }).catch((err) => {
  console.log(err);
 });

