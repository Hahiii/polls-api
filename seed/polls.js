const faker = require('faker');
const Polls = require('../routes/models/poll');
const User = require('../routes/models/users');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/finalProject', { useNewUrlParser: true });


async function getUsers() {
  try {
    const users = await User.find();
    let i = 0;
    while (i < 20) {
      Polls.insertMany([{
        questions: faker.fake("{{lorem.sentence}}"),
        anwser: [{
          text: faker.fake("{{lorem.text}}"),
          votes: faker.fake("{{random.number}}")
        }],
        validation: faker.fake("{{lorem.slug}}"),
        emailsVoted: ['hahi@hahi.com'],
        user: users[i]._id,
        slug: faker.fake("{{lorem.slug}}"),
        createdBy: faker.fake("{{name.lastName}}, {{name.firstName}}"),
      }], function (err) {

      });
      i++;
    }
  }
  catch (err) {
    console.log(err)
  }
}

getUsers();