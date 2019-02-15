const express = require('express')
const router = express.Router()

// components
const Token = require('../endpoints/getToken');

router.get('/', (req, res, next) => {
  Token.get()
       .then((token) => {
          res.send(token.access_token);
       })
       .catch(e => next(e));
});

module.exports = router
