//Send email function
//JSON in a POST body


const pug = require('pug');

// Compile the template file 
const compiledFunction = pug.compileFile('./templates/basic_estimate.pug');

//Get the data from Mongo
response = mogno_data_pull('collection or whatever we need to pass, if anything');

// Render a set of data - this sends it to test, I believe
console.log(compiledFunction({
  acres: response['acres'],
  services: response['services'],
  contact_email: response['contact_email'],
  contact_phone: response['contact_phone'],
}));


