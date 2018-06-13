//Send email function
//JSON in a POST body
const pug = require('pug');

function getDataForEmail(x) {
  //Make a manual thing for now

  var response_array = new Array();

  response_array['acres'] = '55';
  response_array['services'] = 'GoodOleCleanin';
  response_array['contactEmail'] = 'kevinNumbaWan@gmail.com';
  response_array['contactPhone'] = '123-456-7899';

  return response_array;
};


// Compile the template file 
const template = pug.compileFile('./templates/basicEstimate.pug');

//Get the data from Mongo
const response = getDataForEmail('collection or whatever we need to pass, if anything');

// Render a set of data - this sends it to test, I believe
console.log(template({
  acres: response['acres'],
  services: response['services'],
  contactEmail: response['contact_email'],
  contactPhone: response['contact_phone'],
}));

//When not outputting to console, will output to and save to send. Right now do both
//So I can see here and on postman

template({
  acres: response['acres'],
  services: response['services'],
  contactEmail: response['contactEmail'],
  contactPhone: response['contactPhone'],
});

module.exports = {
  template,
};