const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

function sendSMS(Email, otp) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    let mailOptions = {
        from: process.env.NODE_MAILER_USER,
        to: Email,
        subject: "One Time Password - THRUST",
        html: `Please keep your OTP confidential and do not share it with anyone. The OTP will be valid for five minutes only. <br><strong>OTP: ${otp}</strong><br><br>Thank you for choosing THRUST!<br><br>If you have any questions, please contact us at:<br> test@test.com`
    };

    transporter.sendMail(mailOptions, function (err, sucess) {
        if (err) {
            console.log(err)
        } else {
            console.log('Email send successfully')
        }
    })
}

module.exports = {
    sendSMS
}