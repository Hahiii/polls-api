var express = require('express');
var router = express.Router();

/* POST create a poll */
router.post('/poll', function(req, res, next) {
  res.json({
      data: 'POST create a poll'
  })
});

/* GET all polls */
router.get('/poll', function(req, res, next) {
  res.json({
      data: 'GET all polls'
  })
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
