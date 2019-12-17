var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const { Secret_KEY } = require('./secret.json');
var jwt = require('jsonwebtoken');
var token = jwt.sign({
    "sub": "login",
    "admin": true}, Secret_KEY);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const pollsRouter = require('./routes/API/polls');
const registrationRouter = require('./routes/API/registration');
const loginRouter = require('./routes/API/login');

const app = express();

mongoose.connect('mongodb://localhost/finalProject', { useNewUrlParser: true });
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', pollsRouter, registrationRouter, loginRouter);
module.exports = app;
