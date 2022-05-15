const express = require('express');

const app = express();

const middleware = require('../Middleware/middleware');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');
const {
  userSignup,
  userSignin,
  userSignout,
} = require('../controllers/auth.controller');

app.post('/signup', userSignup);
app.post('/signin', userSignin);
app.get('/signout', userSignout);

app.get('/', middleware.isValidToken, getAllUsers);
app.get('/:userId', middleware.isValidToken, getUserById);
app.put('/:userId', middleware.isValidToken, updateUser);
app.delete('/:userId', middleware.isValidToken, deleteUser);

module.exports = app;
