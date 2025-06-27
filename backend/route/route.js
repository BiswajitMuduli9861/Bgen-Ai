const express = require('express');
const {resultData} = require('../controller/controller');
const {signUp, login, sendOtp, verifyOtp, updatePassword} = require('../controller/userController');
const {authenticate} = require("../middleware/authenticate");
// const { googleAuth, googleCallback } = require('../config/googleAuthController');


const router = express.Router();

//Ai response Route
router.post('/content',authenticate,resultData)

// User registration Route
router.post('/signup', signUp);
router.post('/login', login);
router.post('/sendotp',sendOtp)
router.post('/verifyotp',verifyOtp)
router.post('/updatepassword',updatePassword)



// router.get('/auth/google', googleAuth);
// router.get('/auth/google/callback', googleCallback);

module.exports = router;