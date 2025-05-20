require('dotenv').config({ path: './server/.env' });
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.use(
  cors({
    origin: 'https://main.d3uq86hhi34ytt.amplifyapp.com/',
  })
);

app.post('/send-email', (req, res) => {
  const { firstName, email, type, comment } = req.body;
  const mailOptions = {
    from: email,
    to: 'kiry362@gmail.com',
    subject: `New Inquiry from ${firstName}`,
    text: `Type: ${type}\nMessage: ${comment}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email successfully sent');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
