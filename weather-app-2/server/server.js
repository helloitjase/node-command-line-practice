const express = require('express');
const app = express();
const weather = require('./routes.js');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.use('/weather', weather); 


module.exports = app;