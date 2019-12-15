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
router.get('/poll/:id', async function (req, res, next) {
    try {
        const findPollById = await Polls.findById(req.params.id)
            .sort({ createdAt: 1 })
            .exec();

            console.log(findPollById, 'pollById')
        res.status(200);
        res.json({
            data: findPollById
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

/* POST polls By Id */
router.post('/poll/:id', function(req, res, next) {
  res.json({
      data: 'POST polls By Id'
  })
});

/* DELETE polls By Id */
router.delete('/poll/:id', async function (req, res, next) {
    try {
        const deletePollById = await Polls.findByIdAndDelete(req.params.id)
            .sort({ createdAt: 1 })
            .exec();

            console.log(deletePollById, 'deletePollById 5df66ad30dc0154b63a33d74')
        res.status(200);
        res.json({
            data: deletePollById
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

/* PUT polls By Id */
router.put('/poll/:id', function(req, res, next) {
  res.json({
      data: 'PUT polls By Id'
  })
});

module.exports = router;
