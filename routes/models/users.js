const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    age: { type: Number },
    gender: { type: String },
    slug: { type: String},
    createdAt: { type: Date, default: Date.now },
    mmodifiedAt: { type: Date, default: Date.now }
})

module.exports = User = mongoose.model('User', usersSchema);