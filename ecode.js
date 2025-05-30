// Nodemailer-ის გამოყენებით
const nodemailer = require('nodemailer');

async function sendEmailOtp(email, otp) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'YOUR_EMAIL@gmail.com',
      pass: 'YOUR_EMAIL_PASSWORD'
    }
  });

  const mailOptions = {
    from: 'YOUR_EMAIL@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
