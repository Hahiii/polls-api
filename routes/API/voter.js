const express = require('express');
const router = express.Router();
const Poll = require('../models/poll');
const User = require('../models/users');
const voterCheck = require('../../utils/voterCheck')

/* POST vote By Id */
router.post('/poll/vote/:id', voterCheck, async function (req, res, next) {
    res.status(200)
    res.json({
        data: true
    })
})
router.get('/poll/user/:id', async function (req, res, next) {
    try {
        const findPollById = await Poll.findById(req.params.id)
            .sort({ createdAt: 1 })
            .exec();

        let pollObj = {
            questions: findPollById.questions,
            anwser: findPollById.anwser,
            deadline: findPollById.deadline
        }
        res.status(200);
        res.json({
            data: pollObj
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

module.exports = router;