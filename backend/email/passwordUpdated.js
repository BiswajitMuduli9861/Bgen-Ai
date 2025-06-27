const transporter = require('./email');

const passwordUpdatedEmail = async (email) => {
    try {
        const htmlTemplate = `
            <div style="font-family: 'Orbitron', 'Segoe UI', Arial, sans-serif; background: #232946; padding: 32px;">
            <div style="max-width: 540px; margin: auto; background: #181c26; border-radius: 20px; padding: 32px 24px 24px 24px; box-shadow: 0 6px 24px rgba(0,0,0,0.80); border: 2px solid #7f5af0; position:relative; overflow:hidden;">
                <div style="text-align: center; margin-bottom: 24px;">
                    <div style="display: inline-block; background: linear-gradient(135deg, #7f5af0 60%, #2cb67d 100%); border-radius: 50%; width: 70px; height: 70px; line-height: 70px; box-shadow: 0 2px 8px rgba(127,90,240,0.15); border: 2px solid #232526; position:relative;">
                        <span style="font-size: 2em; color: #fff; vertical-align:middle;">&#128171;</span>
                        <span style="position:absolute; bottom:7px; right:7px; font-size:1em; color:#2cb67d;">&#128274;</span>
                    </div>
                </div>
                <h2 style="text-align: center; color: #7f5af0; margin-bottom: 16px; letter-spacing: 1px; font-size: 1.5em; font-weight: 800;">Password Changed!</h2>
                <p style="color: #f5f5f5; font-size: 1em; margin-bottom: 8px; text-align:center;">Hey <span style="color:#2cb67d;">Chat with AI and Explorer</span>,</p>
                <p style="color: #e0e0e0; font-size: 1em; margin-bottom: 8px; text-align:center;">Your <b style="color:#7f5af0;">BgenAi</b> password has been <b style="color:#2cb67d;">successfully updated</b>.</p>
                <p style="color: #e0e0e0; font-size: 1em; margin-bottom: 14px; text-align:center;">If this wasn’t you, <b style="color:#ff5252;">contact support</b> ASAP.</p>
                <div style="text-align:center; margin: 24px 0;">
                    <a href="mailto:bmuduli126@gmail.com" style="background: linear-gradient(90deg, #7f5af0 60%, #2cb67d 100%); color: #fff; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1em; box-shadow: 0 1px 6px rgba(127,90,240,0.15); letter-spacing:1px;">
                        &#128222; Contact Support
                    </a>
                </div>
                <p style="color: #f5f5f5; font-size: 1em; margin-bottom: 0; text-align:center;">Thanks,<br/><span style="color:#7f5af0;">The BgenAi Team</span></p>
                <hr style="margin-top: 24px; border: 0; border-top: 1px solid #222;">
                <p style="font-size: 0.9em; color: #888; text-align:center; margin-top: 12px;">This is an automated message. Please do not reply.</p>
            </div>
            </div>
        `;

        const info = await transporter.sendMail({
            from: '"BgenAi" <bmuduli126@gmail.com>',
            to: email,
            subject: "Password Changed Successfully",
            text: "Your password has been successfully updated. If you didn’t make this change, contact support immediately.",
            html: htmlTemplate,
        });

        // console.log("Confirmation email sent:", info.messageId);
    } catch (error) {
        console.error("Error sending confirmation email:", error);
    }
};

module.exports = { passwordUpdatedEmail };
