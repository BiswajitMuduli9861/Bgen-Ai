const { GoogleGenAI }= require("@google/genai");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cookieParser()); // Middleware to parse cookies
dotenv.config();
const connection = require("./db/db");
connection();
const cors = require("cors");

const _dirname = path.resolve();
const route  = require("./route/route");
app.use(cors({  origin: "http://localhost:5173", // frontend origin
  credentials: true}));   //||credentials: true||----Ye credentials: true setting browser ko cookies, authorization headers, or TLS client certificates send karne ki permission deti hai jab frontend (React/Vite) and backend (Node/Express) alagd domains ya ports pe ho.
// const ai = new GoogleGenAI({ apiKey: "" });
// const ai = new GoogleGenAI({ apiKey: process.env.apiKey });

// async function main(data) {
//   const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash-preview-05-20",
//     contents: data,
//   });
//   // console.log(result.text,13);
//   return result.text;
// }
// app.get("/",async(req,res)=>{
// try{
//   const data = req.body.question;
//   const result = await main(data);
  
//   res.send({"result":result});
// }catch(err){
//   res.status(500).json({status:500, message:"Internal Server Error", error: err.message});
// }
// })




const session = require('express-session');
const passport = require('passport');
const { googleAuth, googleCallback } = require("./config/googleAuthController");



//set Up Session
app.use(session({
  secret:"dlskjflskdslk",
  resave:false,
  saveUninitialized:true
}))

//set Up passport
app.use(passport.initialize())
app.use(passport.session())
//////////////////////////////////// add passport 
require('./config/passport');



//initialize google ouath login
// app.get("/auth/google",  passport.authenticate('google', { scope: ['profile', 'email'] }))
// app.get('/auth/google/callback', passport.authenticate("google",{
//   successRedirect:"http://localhost:5173/searchbar",
//   failureRedirect:'http://localhost:5173/'
// }))

app.get("/auth/google",  googleAuth)         // jadi aaku route me add karibara achhi ta google re callback url ko change kara /api add kara 
app.get('/auth/google/callback', googleCallback)


app.use('/api',route)

app.use(express.static(path.join(_dirname, "/frontend/dist")))
app.all("/{*any}", (_,res)=>{   // ||"/{*any}" mene solve this error - C:\Users\bmudu\Desktop\Deployement Projects\My First AI Project\backend\node_modules\path-to-regexp\dist\index.js:73 throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`); TypeError: Missing parameter name at 2: https://git.new/pathToRegexpError||

  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
})



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log("Server is running on port 5000");
})