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
        const findPollById = await Poll.find().where({ user: req.params.userId })
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
        const pollCreated = await new Poll(req.body)
            .save();
console.log(pollCreated)
        
        res.status(200);
        res.json({
            data: pollCreated
        });

    }
    catch (err) {
        console.log(err)
        res.status(500);
        res.json({
            data: {
                error: err.errors
            }
        });
    }
});

/* DELETE polls By Id */
router.delete('/poll/delete/:id', checkToken, async function (req, res, next) {
    try {
        const deletePollById = await Poll.findByIdAndDelete(req.params.id).exec();
        const newPollData = await Poll.findById(deletePollById.user).exec();

        res.status(200);
        res.json({
            data: newPollData
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
