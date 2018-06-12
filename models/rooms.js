const { requiresAuth } = require('../lib/middleware');

const list = requiresAuth(() => {
  return [{
    id: 1,
    name: 'room 1',
    messages: [{
      id: 'fake-uuid-1',
      text: 'fake test for a fake message.',
      authorId: 14
    }],
  }];
});

module.exports = {
  list,
};