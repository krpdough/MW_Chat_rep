const { send } = require('micro');
const { router, get } = require('microrouter');
//const { Rooms } = require('./models');
const { Estimate_Requests } = require('./models');

module.exports = router(
  get('/estimate_request', Estimate_Requests.send_mail),
);