// Send email function
// JSON in a POST body
const pug = require('pug');
const nodemailer = require('nodemailer');
const configFile = require('../hidden');

// Below was taken from https://www.w3schools.com/nodejs/nodejs_email.asp
// User and pass was suggested from stack overflow, not sure if was just
// exmaple text. I don't want to put in my pass here =D
// OH! We can make an account for this because gmail. Good thinking. Thanks

// Log into gmail service, creating Trasnport object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'grassman.mailservice@gmail.com',
    pass: configFile.Configs.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Compile the template files. Internet says to do this once early on for all of them
const estimateTemplate = pug.compileFile('./templates/basicEstimate.pug');
const requestTemplate = pug.compileFile('./templates/basicRequest.pug');
const ghostTemplate = pug.compileFile('./templates/noData.pug');

// Get the template based on what parameters were passed
const chooseTemplate = (query) => {
  if ('services' in query && ('contactEmail' in query || 'contactPhone' in query)) {
    return estimateTemplate({
      acres: query.acres,
      services: query.services,
      contactEmail: query.contactEmail,
      contactPhone: query.contactPhone,
    });
  } else if ('message' in query && ('contactEmail' in query || 'contactPhone' in query)) {
    return requestTemplate({
      message: query.message,
      name: query.name,
      contactEmail: query.contactEmail,
      contactPhone: query.contactPhone,
    });
  }

  return ghostTemplate({
    message: query.message,
    name: query.name,
    acres: query.acres,
    services: query.services,
    contactEmail: query.contactEmail,
    contactPhone: query.contactPhone,
  });
};

// const getDataForEmail = () => ({
//   acres: '55',
//   services: 'GoodOleCleanin',
//   contactEmail: 'kevinNumbaWan@gmail.com',
//   contactPhone: '123-456-7899',
// });

const sendEstimateEmail = (res) => {
  // For manual testing, uncomment below and the function
  // const response = getDataForEmail();
  // console.log(res.query);

  // Create mail by feeding in options
  const mailOptions = {
    from: 'grassman.mailservice@gmail.com',
    to: 'krpdough@gmail.com',
    subject: 'A New Request has been Created',
    html: chooseTemplate(res.query),
  };

  // Send the mail
  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};


module.exports = {
  sendEstimateEmail,
};
