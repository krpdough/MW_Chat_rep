const { send } = require('micro');
const { router, get } = require('microrouter');
const { Rooms } = require('./models');

module.exports = router(
  get('/rooms', Rooms.list),
);