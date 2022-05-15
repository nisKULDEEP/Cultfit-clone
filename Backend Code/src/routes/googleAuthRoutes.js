const express = require('express');
const cors = require('cors');
const passport = require('../utils/passport');
const tokenModel = require('../model/tokenModel');

const encryptDecrypt = require('../utils/encryption-decryption');

const JWTtoken = require('../utils/JWTtoken');
const userModel = require('../model/userModel');

const app = express();

const CLIENT_URL = 'https://cultfit-clone.netlify.app';
//Middleware
app.use(express.json());
// app.use(
//   cors({
//     origin: CLIENT_URL,
//     methods: 'GET,POST,PUT,DELETE',
//     credentials: true,
//   })
// );
app.use(passport.initialize());
app.use(passport.session());

// GOOGLE ROUTES
app.get('/failed', (req, res) => {
  res.send('Some error occured while login to google');
});

app.get('/login/success', async (req, res) => {
  if (req.user) {
    const { email } = req.user;
    const userDetail = await userModel.findOne({ email });

    if (userDetail) {
      const obj = {
        first_name: userDetail.firstName,
        email,
      };

      const token = JWTtoken.generateToken(obj);
      await tokenModel.create({ token, userId: userDetail._id });
      res.status(200).json({
        status: 200,
        message: 'Success Login',
        token,
        user: userDetail,
      });
    } else {
      const encryptedPassword = encryptDecrypt.encryptPassword(
        'sdgrjgoefuofwgj3254357u6575'
      );
      const userDetailObj = {
        first_name: req.user.given_name,

        email: req.user.email,
        password: encryptedPassword,
        photo: req.user._json.picture,
      };
      await userModel.insertMany([userDetailObj]);
      delete userDetailObj.password;

      const token = JWTtoken.generateToken(userDetailObj);
      await tokenModel.create({ token, userId: userDetail._id });
      res.status(200).json({
        message: 'Registration Success',
        token,
      });
    }
  } else {
    res.status(400).json({ message: 'something wrong' });
  }
});

app.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

app.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/failed',
  })
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

//FACEBOOK ROUTES
app.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['public_profile', 'email'],
  })
);

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/failed',
  })
);

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/');
// }

module.exports = app;
