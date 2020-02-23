const router = require('express').Router();
const twitch = require('./control/index.js');

router.get('/freeCodeCamp', twitch.freeCodeCamp);
router.get('/redirect/:channel', twitch.reDirectChannel);


module.exports = router;