const express = require('express');
const router = express.Router();

const tokenRoute = require('./token');
const searchRoute = require('./search');
const trackRoute = require('./track');
const videoRoute = require('./video');

router.get('/', function(req, res, next) {
  res.send('now then');
});

router.use('/getToken', tokenRoute);
router.use('/search', searchRoute);
router.use('/track', trackRoute);
router.use('/video', videoRoute);


module.exports = router;
