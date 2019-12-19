const express = require('express');
const router = express.Router();
// const Poll = require('../models/poll');
// const User = require('../models/users');


/* POST vote By Id */
router.post('/user/poll/:id/vote', function (req, res, next) {
    res.json({
        data: 'POST vote By Id'
    })
});

module.exports = router;