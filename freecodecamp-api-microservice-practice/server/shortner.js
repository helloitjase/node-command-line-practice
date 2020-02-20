const router = require('express').Router();
const control = require('./shortnercontroller.js');

router.post('/api/shorturl/new', control.new);

router.get('/api/shorturl/:id', control.useShort);

module.exports = router;

