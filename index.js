const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const pollsRouter = require('./routes/API/polls');
const voterRouter = require('./routes/API/voter');
const registrationRouter = require('./routes/API/registration');
const loginRouter = require('./routes/API/login');


const app = express();

console.log(process.env.MONGODB_URI, '---------------------------->')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
.catch(error => console.log(error, '#########################'));

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', pollsRouter, registrationRouter, loginRouter, voterRouter);


module.exports = app;
