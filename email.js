// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());

app.post('/send-otp', async (req, res) => {
  const { email, otp } = req.body;
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: 'your@gmail.com', pass: 'your-password' }
  });

  await transporter.sendMail({
    from: 'your@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}`
  });

  res.send({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));
