const { send } = require('micro');

/* Based on
*  https://github.com/augustovictor/node-ms-micro/blob/2f2471260dd3ab95fb2e0a6ef580fbb4e94e0fd3/middlewares/mid.js
*  ...seems to work */

exports.requiresAuth = (next) => {
  const isAuthorized = true;
  return (req, res) => {
    if (!isAuthorized) {
      return send(res, 401, 'Unauthorized.');
    }
    return next(req, res);
  };
};