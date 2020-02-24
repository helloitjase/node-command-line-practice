const router = require('express').Router();
const twitch = require('./control/index.js');

router.get('/freeCodeCamp', twitch.freeCodeCamp);
router.get('/redirect/:channel', twitch.reDirectChannel);
router.get('/streaminfo/:channel', twitch.getChannelInfo)

module.exports = router;