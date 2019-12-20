(async () => {

  const faker = require('faker');
  const Polls = require('../routes/models/poll');
  const User = require('../routes/models/users');
  const mongoose = require('mongoose');

  try {
    const db = await mongoose.connect('mongodb://localhost/finalProject', { useNewUrlParser: true });
    


    let list = await Polls.db.db.listCollections({
      name: Polls.collection.name
    }).toArray()

    console.log(list.length)
    //console.log(JSON.stringify(list,undefined,2));

  





if (list.length) {

  await Polls.collection.drop();
}

    const users = await User.find();

    let polls = [
      {
        questions: 'Who is human\'s best friend.',
        anwser: [{
          text: "Cat",
          votes: 127
        }, {
          text: "Dog",
          votes: 48
        }, {
          text: "Unicorn",
          votes: 23
        }],
        validation: "catdog",
        emailsVoted: [],
        user: users[0]._id,
        deadline: new Date(),
      },
      {
        questions: "Dinner get togethere.",
        anwser: [{
          text: "Mon, Dec 23 2019",
          votes: 2
        }, {
          text: "Fri, Dec 27 2019",
          votes: 3
        }, {
          text: "Thu, Jan 2 2020",
          votes: 4
        }, {
          text: "Sat, Jan 11 2020",
          votes: 8
        }],
        validation: "dinner",
        emailsVoted: [],
        user: users[1]._id,
        deadline: new Date(),
      },
      {
        questions: "Which is your favorite classic Christmas song?",
        anwser: [{
          text: "All I Want for Christmas is You",
          votes: 838
        }, {
          text: "Jingle Bell Rock",
          votes: 778
        }, {
          text: "Last Christmas",
          votes: 879
        }],
        validation: "song",
        emailsVoted: [],
        user: users[2]._id,
        deadline: new Date(),
      }
    ];
    // Change to use faker or not
    const shouldUseFaker = false;
    if (shouldUseFaker) {
      let i = 0;
      let polls = [];
      while (i < 20) {
        polls.push({
          questions: faker.fake("{{lorem.sentence}}"),
          anwser: [{
            text: faker.fake("{{lorem.text}}"),
            votes: faker.fake("{{random.number}}")
          }, {
            text: faker.fake("{{lorem.text}}"),
            votes: faker.fake("{{random.number}}")
          }, {
            text: faker.fake("{{lorem.text}}"),
            votes: faker.fake("{{random.number}}")
          }],
          validation: faker.fake("{{lorem.slug}}"),
          emailsVoted: ['hahi@hahi.com'],
          user: users[i]._id,
          slug: faker.fake("{{lorem.slug}}"),
          createdBy: faker.fake("{{name.lastName}}, {{name.firstName}}"),
        })
        i++;
      }
    }

    await Polls.insertMany(polls);
    await db.connection.close();
  }
  catch (err) {
    console.log(err)
  }
})();