//store with out cookies token
// const jwt = require('jsonwebtoken');
// const passport = require('passport');
// const OAuth2Strategy = require('passport-google-oauth20').Strategy;
// const userModel = require('../models/model')


// passport.use(new OAuth2Strategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL:"/auth/google/callback",
    

// }, async (accessToken, refreshToken, profile, done) => {
//     //  console.log(profile)
//     try {
//       let user = await userModel.findOne({email: profile.emails[0].value})
//       console.log(user,17)
//       if(!user){
//         user = new userModel({
//           fullName: profile.displayName,
//           email:profile.emails[0].value,
//           password:"null"
//         })

//         await user.save();
//       }
//        const token = jwt.sign({email} , process.env.jwt_secrentKey,{expiresIn:"5m"})
//           // console.log(token)
//           res.cookie("jsontoken", token, {
//                 httpOnly: true,
//                 secure: false,         // use in production with HTTPS
//                 sameSite: "Lax", 
//                 maxAge: 5 * 60 * 1000, // 5 seconds // this 4 fields are optional
//               });
//       return done(null, user,token);
    
//     } catch (error) {
    
//       return done(error,null)
//     }
// }));
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });





const jwt = require('jsonwebtoken');
const passport = require('passport');
const OAuth2Strategy = require('passport-google-oauth20').Strategy;
const userModel = require('../models/model')




//store in cookies token    //Chatgpt - Google OAuth Scope Error 
passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,  // 🔥 This is the trick
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        let user = await userModel.findOne({ email: profile.emails[0].value });
        if (!user) {
          user = new userModel({
            fullName: profile.displayName,
            email: profile.emails[0].value,
            password: "null",
          });
          await user.save();
        }

        // ✅ Create token
        const token = jwt.sign({ email: user.email }, process.env.jwt_secrentKey, {
          expiresIn: "1h",
        });

        // ✅ Access res through req.res
        req.res.cookie("jsontoken", token, {
          httpOnly: true,
          secure: true,
          sameSite: "Strict",
          maxAge: 60 * 60 * 1000,
        });

        // ✅ Done with user
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
