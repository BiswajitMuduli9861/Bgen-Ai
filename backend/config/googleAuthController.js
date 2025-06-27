const passport = require('passport');

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleCallback = passport.authenticate('google', {
  successRedirect: 'http://localhost:5173/',
  failureRedirect: 'http://localhost:5173/'
});
