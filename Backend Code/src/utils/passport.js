const passport = require('passport');
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: 'https://cultfit-server.herokuapp.com/google/callback',
      // passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

// passport.use(new FacebookStrategy({
//   clientID: 407941370877416,
//   clientSecret: '3b505b8e1aef5d0f0503b8a94865280a',
//   callbackURL: "http://localhost:3000/auth/facebook/callback"
// },
// function(accessToken, refreshToken, profile, cb) {

//     return cb(err, user);
// }));

module.exports = passport;
