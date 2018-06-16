//Send email function
//JSON in a POST body
const pug = require('pug');
const nodemailer = require('nodemailer');

const getDataForEmail = (x) => {
  //Make a manual thing for now

  return {
    acres: '55',
    services: 'GoodOleCleanin',
    contactEmail: 'kevinNumbaWan@gmail.com',
    contactPhone: '123-456-7899',
  };
}

const sendEstimateEmail = (req, res) => {
  var response = getDataForEmail('Dummy data, for when we need it to be something');
  console.log(response)

  //Create mail by feeding in options
  var mailOptions = {
    from: 'grassman.mailservice@gmail.com',
    to: 'krpdough@gmail.com',
    subject: 'A New Request has been Created',
    text: template({
      acres: response['acres'],
      services: response['services'],
      contactEmail: response['contactEmail'],
      contactPhone: response['contactPhone'],
    })
  };

  //Send the mail
  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 

}

//Below was taken from https://www.w3schools.com/nodejs/nodejs_email.asp
//User and pass was suggested from stack overflow, not sure if was just
//exmaple text. I don't want to put in my pass here =D
//OH! We can make an account for this because gmail. Good thinking. Thanks

//Log into gmail service, creating Trasnport object
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'grassman.mailservice@gmail.com',
    pass: 'W3partyhard!'
  },
  tls: {
    rejectUnauthorized: false
  }
});



// Compile the template file 
const template = pug.compileFile('./templates/basicEstimate.pug');

//Get the data from Mongo
var response = getDataForEmail('collection or whatever we need to pass, if anything');

console.log(response)

module.exports = {
  sendEstimateEmail,
};