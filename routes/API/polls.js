const express = require('express');
const router = express.Router();
const Poll = require('../models/poll');
const User = require('../models/users');
const checkToken = require('../../utils/checkToken')


/* GET all polls */
router.get('/poll/:id', checkToken, async function (req, res, next) {
    try {
        const polls = await Poll.findById(req.params.id)
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

/* GET polls By Id */
router.get('/poll/list/:userId', checkToken, async function (req, res, next) {
    try {
        const findPollById = await Poll.find().where({user:req.params.userId})
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
router.post('/poll/:userId', checkToken, async function (req, res, next) {
    try {
        const user = await User.findById(req.params.userId).exec();
        req.body.user = user._id;
        const pollCreated = new Poll(req.body);
        pollCreated.save(async function (err) {
            if (err) return console.log(err);
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
router.delete('/poll/:id', checkToken, async function (req, res, next) {
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
router.put('/poll/:id', checkToken, function (req, res, next) {
    res.json({
        data: 'PUT polls By Id'
    })
});

module.exports = router;
