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
    age: faker.fake("{{random.number}}"),
    gender: faker.fake("{{lorem.slug}}"),
    slug: faker.fake("{{lorem.slug}}"),
    createdAt: faker.fake("{{date.recent}}"),
    modifiedAt: faker.fake("{{date.recent}}"),
  
  }], function (err) {
  
  });
  i++;
}
