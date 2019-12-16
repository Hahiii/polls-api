const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    mmodifiedAt: { type: Date, default: Date.now }
})

module.exports = User = mongoose.model('User', usersSchema);