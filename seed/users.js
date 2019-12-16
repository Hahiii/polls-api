const faker = require('faker');
const User = require('../routes/models/users');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/finalProject', { useNewUrlParser: true });

let i = 0;
while (i < 20) {
    User.insertMany([{
    firstname: faker.fake("{{name.firstName}}"),
    lastname: faker.fake("{{name.lastName}}"),
    email: faker.fake("{{internet.email}}"),
    password: faker.fake("{{internet.password}}"),
    createdAt: faker.fake("{{date.recent}}"),
    modifiedAt: faker.fake("{{date.recent}}"),
  
  }], function (err) {
  
  });
  i++;
}
