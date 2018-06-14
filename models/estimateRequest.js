//Send email function
//JSON in a POST body
const pug = require('pug');

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
  return template({
    acres: response['acres'],
    services: response['services'],
    contactEmail: response['contactEmail'],
    contactPhone: response['contactPhone'],
  });
}

// Compile the template file 
const template = pug.compileFile('./templates/basicEstimate.pug');

//Get the data from Mongo
var response = getDataForEmail('collection or whatever we need to pass, if anything');

console.log(response)

// Render a set of data - this sends it to test, I believe
console.log(template({
  acres: "ACESSSES",
  services: "Do Stuff!!",
  contactEmail: response['contactEmail'],
  contactPhone: response['contactPhone'],
}));



module.exports = {
  sendEstimateEmail,
};