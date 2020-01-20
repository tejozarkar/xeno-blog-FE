'use strict';

const {buildPath} = require('../server.js');

module.exports = app => {
  app.get('/user', (req, resp) =>
    resp.send(require(buildPath('./mocks/users/users.json'))));

  app.post('/authenticate', (req, resp) =>
    resp.status(200)
      .set('Access-Control-Allow-Origin', 'http://localhost:4200')
      .send(require(buildPath('./mocks/authenticate/auth.json'))));
};


