const nodemailer = require('nodemailer');
const http2 = require('node:http2');

const { HTTP_STATUS_INTERNAL_SERVER_ERROR } = http2.constants;

const sendEmail = (req, res, next) => {

  const {
    user,
    pass,
    from,
    to,
    subject,
    text
  } = req.body;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user,
    pass: pass
  }
});

var mailOptions = {
  from: from,
  to: to,
  subject: subject,
  text: text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).send({status: 'error', message: error}).end();
  } else {
    console.log('Email sent: ' + info.response);
    res.send({status: 'ok'}).end();
  }
});
};

module.exports = sendEmail;