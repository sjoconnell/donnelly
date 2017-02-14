const express = require('express');
const app = express();
const api = require('./api/api');
const config = require('./config/config');

require('mongoose').connect(config.db.url);

require('./middleware/appMiddleware')(app);

app.use('/api', api);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalid Token');
  } else {
    console.log(err);
    res.status(500).send('problem');
  }
});

module.exports = app;