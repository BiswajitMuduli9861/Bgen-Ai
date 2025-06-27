const transporter = require('./email')

const verificationCode = async (email, otp) => {
    try {
        const htmlTemplate = `
            <div style="background:linear-gradient(120deg,#0a0f1a 0%,#1a2236 100%);padding:40px 0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
            <div style="max-width:480px;margin:auto;background:#11182a;border-radius:22px;box-shadow:0 6px 32px rgba(10,20,40,0.22);overflow:hidden;border:1.5px solid #22304a;">
            <div style="background:#19203a;padding:32px 0 0 0;text-align:center;position:relative;">
            <img src="https://img.icons8.com/ios-filled/100/4fc3f7/shield.png" alt="Shield" style="width:60px;margin:0 auto 10px auto;display:block;position:relative;top:-30px;" />
            <h1 style="color:#4fc3f7;font-size:2rem;margin:0 0 6px 0;letter-spacing:1px;">BgenAi Verification</h1>
            <span style="color:#b0b8d1;font-size:15px;">Your security, our priority</span>
            </div>
            <div style="padding:32px 28px 24px 28px;">
            <p style="color:#e3e6f3;font-size:17px;margin-bottom:10px;text-align:center;">Hello,</p>
            <p style="color:#b0b8d1;font-size:16px;margin-bottom:24px;text-align:center;">Use the OTP below to reset your password.</p>
            <div style="width:100%;text-align:center;margin:28px 0;">
              <span style="background:linear-gradient(90deg,#22304a 60%,#0f2027 100%);color:#4fc3f7;font-size:2.2rem;font-weight:700;letter-spacing:10px;padding:18px 38px;border-radius:14px;border:2.5px dashed #4fc3f7;box-shadow:0 2px 12px #0f2027;display:inline-block;min-width:180px;min-height:60px;text-align:center;margin:auto;">
                ${otp}
              </span>
            </div>
            <p style="color:#7a86a1;font-size:15px;margin-bottom:0;text-align:center;">If you did not request this, please ignore this email.<br>Stay safe!</p>
            <div style="margin-top:32px;text-align:center;">
            <span style="color:#4fc3f7;font-weight:600;">— The BgenAi Team</span>
            </div>
            </div>
            </div>
            </div>
        `;

        const info = await transporter.sendMail({
            from: '"BgenAi" <bmuduli126@gmail.com>',
            to: email,
            subject: "Forgot Password",
            text: `Your OTP code is: ${otp}`,
            html: htmlTemplate,
        });

        // console.log("Email sent:", info.messageId);
    } catch (error) {
        console.log("Error sending email:", error);
    }
};

module.exports={verificationCode}