const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const timeStamp = require('./timestamp.js');
const shortner = require('./shortner.js');

app.use(bodyParser.json());

app.use('/times', timeStamp);

app.use('/shortner', shortner);

module.exports = app;
