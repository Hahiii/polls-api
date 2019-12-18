const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const usersSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
})
usersSchema.plugin(uniqueValidator);
usersSchema.path('firstname').trim()
usersSchema.path('lastname').trim()
usersSchema.path('email').trim()
usersSchema.path('password').trim()
module.exports = User = mongoose.model('User', usersSchema);