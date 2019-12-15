const faker = require('faker');
const Polls = require('../routes/models/poll');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/finalProject', { useNewUrlParser: true });

let i = 0;
while (i < 20) {
  Polls.insertMany([{
    questions: faker.fake("{{lorem.sentence}}"),
    anwser: [{
      text: faker.fake("{{lorem.text}}"),
      votes: faker.fake("{{random.number}}")
    }],
    slug: faker.fake("{{lorem.slug}}"),
    createdBy: faker.fake("{{name.lastName}}, {{name.firstName}}"),
    createdAt: faker.fake("{{date.recent}}"),
    mmodifiedAt: faker.fake("{{date.recent}}"),
  
  }], function (err) {
  
  });
  i++;
}
