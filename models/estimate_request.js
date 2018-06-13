//Send email function
//JSON in a POST body


// {
//   "acres": Decimal,
//     "services": Comma delimited String,
//       "contact_email": String,
//         "contact_phone": String,
// }

const pug = require('pug');

// Compile the template file 
const compiledFunction = pug.compileFile('./templates/basic_estimate.pug');

// Render a set of data
console.log(compiledFunction({
  name: 'KKKEEEVVIIINNN'
}));