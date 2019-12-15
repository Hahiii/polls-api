const mongoose = require('mongoose');


const anwserSchema = new mongoose.Schema({
            text: { type: String },
            votes: { type: Number}
})




const pollSchema = new mongoose.Schema({
    questions: { type: String },
    anwser: [anwserSchema],
    slug: { type: slug},
    createdBy: { type: String },
    createdAt: { type: Date, default: Data.now },
    mmodifiedAt: { type: Date, default: Data.now }
})