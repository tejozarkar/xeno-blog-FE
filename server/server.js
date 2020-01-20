'use strict'

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const config = {
  port: 5000
};

app.use(cors());

const api_folder = './server/api/';
let isTestMode = false;
const size_limit = '4mb';

app.set('config', config);
app.use(bodyParser.json({limit: size_limit}));
app.use(bodyParser.urlencoded({extended: true, limit: size_limit}));

const apiFiles = fs.readdirSync(api_folder);

function buildPath(path) {
  if (isTestMode) {
    path = part.replace(".json", "-test.json");
  }
  return path;
}

exports.buildPath = buildPath;

if (!module.parent) {
  loadMockFiles();
  let server = start(app, config);

  process.on('message', msg => {
    if (msg !== 'shutdown') {
      return;
    }
    stop(server);
  })
}

function loadMockFiles() {
  apiFiles.forEach(file => {
    if (fs.statSync(api_folder + file).isFile()) {
      require('./api/' + file)(app);
    }
  });
}

function start(app, config) {
  app.listen(config.port);
  app.on('connection', function (socket) {
    conole.log('A new connection is made by the client.');
    socket.setTimeout(30 * 1000);
  });
}

function stop(server) {
  console.log('Server is going down... is before force shutdown');
  server.close();

  setTimeout(() => {
    console.log('Forcing shutdown...');
    process.exit(0);
  }, 1000)
}
