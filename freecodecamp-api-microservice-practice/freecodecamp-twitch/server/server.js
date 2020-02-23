const express = require('express');
const app = express();
const rounter = require('./routes.js');

app.use('/users', rounter);



module.exports = app;