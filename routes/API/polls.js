var express = require('express');
var router = express.Router();
const Polls = require('../models/poll');

/* POST create a poll */
router.post('/poll', function(req, res, next) {
  res.json({
      data: 'POST create a poll'
  })
});

/* GET all polls */
router.get('/poll', async function (req, res, next) {
    try {
        const polls = await Polls.find()
            .sort({ createdAt: 1 })
            .exec();

            console.log(polls, 'polls')
        res.status(200);
  res.json({
            data: polls
});
    }
    catch (err) {
        res.status(500);
        res.json({
            data: "Error getting the polls.!",
            error: err
        });
    }
});

/* POST vote By Id */
router.post(' /poll/:id/vote', function(req, res, next) {
  res.json({
      data: 'POST vote By Id'
  })
});

/* GET polls By Id */
router.get('/poll/:id', function(req, res, next) {
  res.json({
      data: 'GET polls By Id'
  })
});

/* POST polls By Id */
router.post('/poll/:id', function(req, res, next) {
  res.json({
      data: 'POST polls By Id'
  })
});

/* DELETE polls By Id */
router.delete('/poll/:id', function(req, res, next) {
  res.json({
      data: 'DELETE polls By Id'
  })
});

/* PUT polls By Id */
router.put('/poll/:id', function(req, res, next) {
  res.json({
      data: 'PUT polls By Id'
  })
});

module.exports = router;
