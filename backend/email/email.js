const nodemailer = require("nodemailer");

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "bmuduli126@gmail.com",
    pass: "xtit cvcv skyu vfnd",
  },
});


module.exports = transporter