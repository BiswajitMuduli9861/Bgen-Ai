const userModel = require('../models/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { verificationCode } = require('../email/verificationCode');
const { passwordUpdatedEmail } = require('../email/passwordUpdated');
const signUp = async (req, res) => {
    try {
        const { fullName, email, password} = req.body;

        if (!fullName || !email || !password) {
            return res.status(422).json({ status: 422, message: "Bad Request", error: "All fields are required" });
        }
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(409).json({ status: 409, message: "Conflict", error: "User already exists" });
        }
        const hashPassword =await bcrypt.hash(password,10);
        const newUser = new userModel({ fullName, email, password:hashPassword});
        await newUser.save(); 
       
        res.status(201).json({ status: 201, message: "User created successfully", data: { fullName, email } });

    } catch (err) {
        res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
    }
}


const login = async(req,res) =>{
    try {
        
        const {email,password} = req.body;
        
        if(!email || !password){
            return res.status(422).json({ status: 422, message: "Bad Request", error: "All fields are required" });
        }
        const userExist = await userModel.findOne({email:email})
        if(!userExist){
        return res.status(401).json({message:"Invalid Credential"})
    }
    const passwordMatch = await bcrypt.compare(password, userExist.password)
    if(!passwordMatch){
        return res.status(401).json({message:"Invalid Credential"})
    }
    
    const token = jwt.sign({email} , process.env.jwt_secrentKey,{expiresIn:"1h"})
    // console.log(token)
    res.cookie("jsontoken", token, {
          httpOnly: true,
          secure: true,         // use in production with HTTPS
          sameSite: "Strict", 
          maxAge: 60 * 60 * 1000, // 1h seconds // this 4 fields are optional
        });
        
        
        res.status(200).json({message:"User login successfully",UserId:userExist._id,UserEmail:userExist.email, token:token})
    } catch (err) {
           res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
    }
}



const sendOtp = async (req, res) => {
    try {
        
        const { email } = req.body;
        
        if (!email) {
            return res.status(422).json({ status: 422, message: "Bad Request", error: "Email is required" });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
        return res.status(404).json({ status: 404, message: "Not Found", error: "User not found" });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP
    user.OTP = otp; // Store OTP in the user document
    await user.save();
    
    verificationCode(user.email,otp)
    
    
    
    res.status(200).json({ status: 200, message: "Reset password sent to your email" });
} catch (err) {
       res.status(500).json({ status: 500, message: "Internal Server Error", error: err.message });
}
}

const verifyOtp = async(req,res) =>{
    try {
        
        const {otpData,email} = req.body;
        // console.log(otpData , 95)
        // console.log(req.body)
        if(!otpData){
            res.status(422).json({status:422, message:"Bad Request", error:"otp is Required"})
        }
        const user = await userModel.findOne({OTP:otpData, email:email});
        if(!user){
            return res.status(404).json({ status: 404, message: "Not Found", error: "OTP Invalid or not found" });
        }
         user.isVierified = true;
         user.OTP = undefined;
         await user.save();
             res.status(200).json({status: 200, message: "OTP verified successfully. You can now reset your password.", userId: user._id,});

        } catch (error) {

               res.status(500).json({ status: 500, message: "Internal Server Error", error: error.message });
        }
}

const updatePassword = async (req, res) => {
    try {
        const { userId, newPassword } = req.body;

        if (!userId || !newPassword) {
            return res.status(422).json({
                status: 422,
                message: "Bad Request",
                error: "userId and newPassword is Required"
            });
        }

        const hashPassword = await bcrypt.hash(newPassword, 10);

        // ✅ Get user email before updating password
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "User not found"
            });
        }

        await userModel.updateOne({ _id: userId }, { $set: { password: hashPassword } });

        // ✅ Now pass the email
        await passwordUpdatedEmail(user.email);

        res.status(200).json({
            status: 200,
            message: "Password updated successfully"
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = { signUp,login, sendOtp ,verifyOtp,updatePassword};