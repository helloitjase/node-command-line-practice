const router = require('express').Router();
const weather = require('./controller/index.js');

router.post('/city', weather.getWeather);

module.exports = router;