const Poll = require('../routes/models/poll');
const User = require('../routes/models/users');

let voterCheck = async (req, res, next) => {
    const findPollById = await Poll.findById(req.params.id)
    const pollCreater = await User.findById(findPollById.user)
    if (findPollById.emailsVoted.indexOf(req.body.email) == -1 && req.body.email != pollCreater.email && req.body.validation === findPollById.validation) {
        findPollById.emailsVoted.push(req.body.email)
        findPollById.anwser.map(item => {
            return item.text == req.body.text ? item.votes++ : '';
        })
        findPollById.save(function (err) {
            if (err) return console.log(err);
        })

        next();
        return;
    }
    res.status(500);
    res.json({
        data: false
    })
}
module.exports = voterCheck;