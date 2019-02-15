const express = require('express')
const router = express.Router()

// components
const Search = require('../endpoints/search');

router.post('/', (req, res, next) => {

    return Search.video(req, res)
            .then((results) => {
                res.send(results);
            })
            .catch(e => next(e));
});

module.exports = router
