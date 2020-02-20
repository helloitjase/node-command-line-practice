const express = require('express');
const router = express.Router();
const api = require('./Timestampcontollers.js');

router.get('/api/timestamp/', api.emptyDate); 
router.get('/api/timestamp/:date_string', api.timeStamp); 

module.exports = router;