const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongodb = require('./db/mongodb');

mongodb.initialize();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./router');
app.use(routes);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, () => {
  `server is Running in :${port}`;
});

module.exports = app;
