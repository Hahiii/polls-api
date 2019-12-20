const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const anwserSchema = new mongoose.Schema({
    text: { type: String, required: true },
    votes: { type: Number }
})

anwserSchema.plugin(uniqueValidator);
anwserSchema.path('text').trim()

const pollSchema = new mongoose.Schema({
    questions: { type: String, required: true },
    anwser: [anwserSchema],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    validation: {type: String, required: true},
    emailsVoted: [],
    deadline: { type: Date, required: true},
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
})
pollSchema.plugin(uniqueValidator);
pollSchema.path('validation').trim()
pollSchema.path('questions').trim()
module.exports = Poll = mongoose.model('Poll', pollSchema);