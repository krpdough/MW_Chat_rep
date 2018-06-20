// const { send } = require('micro');
const { router, post } = require('microrouter');
const { EstimateRequests } = require('./models');

module.exports = router(post('/estimateRequest', EstimateRequests.sendEstimateEmail));
