var express = require('express');
var router = express.Router();
const Poll = require('../models/poll');
const User = require('../models/users');

/* POST create a poll */
router.post('/poll', async function (req, res, next) {
    try {
        const pollCreated = new Poll(req.body);
        pollCreated.save(function (err) {
            if (err) return handleError(err);
            res.status(200);
            res.json({
                data: pollCreated
            });
        });
    }
    catch (err) {
        res.status(500);
        res.json({
            data: 'POST create a poll failed',
            error: err
        })
    }
});

/* GET all polls */
router.get('/poll', async function (req, res, next) {
    try {
        
        const polls = await Poll.find()
            .where({user:'5df79b6e3b67cb1aa083a9f7'})
            .sort({ modifiedAt: -1 })
            .exec();
            
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
router.post(' /poll/:id/vote', function (req, res, next) {
    res.json({
        data: 'POST vote By Id'
    })
});

/* GET polls By Id */
router.get('/poll/:id', async function (req, res, next) {
    try {
        const findPollById = await Poll.findById(req.params.id)
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

/* POST polls By User Id */
router.post('/poll/:userId', async function (req, res, next) {
    try {
        const user = await User.findById(req.params.userId).exec();
        req.body.user = user._id;
        const pollCreated = new Poll(req.body);
        pollCreated.save(async function (err) {
            if (err) return handleError(err);
            res.status(200);
            res.json({
                data: pollCreated
            });
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

/* DELETE polls By Id */
router.delete('/poll/:id', async function (req, res, next) {
    try {
        const deletePollById = await Poll.findByIdAndDelete(req.params.id)
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
router.put('/poll/:id', function (req, res, next) {
    res.json({
        data: 'PUT polls By Id'
    })
});

module.exports = router;
