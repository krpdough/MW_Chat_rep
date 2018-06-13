//This will call the MongoWongo and get the data we need for email
function mogno_data_pull(x)
{
  //Make a manual thing for now

  var response_array = new Array();

  response_array['acres'] = '55';
  response_array['services'] = 'GoodOleCleanin';
  response_array['contact_email'] = 'kevinNumbaWan@gmail.com'; 
  response_array['contact_phone'] = '123-456-7899';

  return response_array;
}

//Data looks like this
// {
//   "acres": Decimal,
//     "services": Comma delimited String,
//       "contact_email": String,
//         "contact_phone": String,
// }