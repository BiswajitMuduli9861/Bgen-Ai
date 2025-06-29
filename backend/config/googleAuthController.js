const passport = require('passport');

exports.googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleCallback = passport.authenticate('google', {
  successRedirect: 'https://bgen-ai.onrender.com/',
  failureRedirect: 'https://bgen-ai.onrender.com/'
});
