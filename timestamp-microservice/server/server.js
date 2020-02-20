const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes.js');

app.use(bodyParser.json());

app.use('/times', router);

module.exports = app;
