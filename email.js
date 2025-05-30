// Twilio-ს გამოყენებით (სერვისი ფასიანია)
async function sendSmsOtp(phoneNumber, otp) {
  const accountSid = 'TWILIO_ACCOUNT_SID';
  const authToken = 'TWILIO_AUTH_TOKEN';
  const client = require('twilio')(accountSid, authToken);

  try {
    await client.messages.create({
      body: `Your OTP code is: ${otp}`,
      from: 'TWILIO_PHONE_NUMBER',
      to: phoneNumber
    });
    console.log('SMS sent successfully');
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}
