const express = require('express');
const router = express.Router();
const {
 getUsers,
 getUser,
 createUser,
} = require('../Controller/UsersController');

router.get('/users', getUsers);
router.get('/user/:email', getUser);
router.post('/addUser', createUser);


module.exports = router;

