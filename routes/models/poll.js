const mongoose = require('mongoose');

const anwserSchema = new mongoose.Schema({
    text: { type: String },
    votes: { type: Number }
})

const pollSchema = new mongoose.Schema({
    questions: { type: String },
    anwser: [anwserSchema],
    slug: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    validation: {type: String},
    emailsVoted: [],
    createdBy: { type: String },
    deadline: { type: Date },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
})

module.exports = Poll = mongoose.model('Poll', pollSchema);