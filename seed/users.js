(async function () {
  const faker = require('faker');
  const User = require('../routes/models/users');
  const mongoose = require('mongoose');

  try {
    const db = await mongoose.connect('mongodb://localhost/finalProject', { useNewUrlParser: true });

    console.log(db)

    let list = await User.db.db.listCollections({
      name: User.collection.name
    }).toArray()

    if (list.length) {
      await User.collection.drop();
    }

    let users = [
      {
        firstname: 'Maria',
        lastname: 'May',
        email: 'maria.may@gmail.com',
        password: 'yoyoyo',
      },
      {
        firstname: 'Lea',
        lastname: 'Zell',
        email: 'lea.zell@gmail.com',
        password: 'yoyoyo',
      },
      {
        firstname: 'Nora',
        lastname: 'Catson',
        email: 'nora.catson@gmail.com',
        password: 'meow',
      }
    ];
    
    // Change to use faker or not
    const shouldUseFaker = false;

    if (shouldUseFaker) {
      users = [];

      let i = 0;
      while (i < 20) {
        users.push({
          firstname: faker.fake("{{name.firstName}}"),
          lastname: faker.fake("{{name.lastName}}"),
          email: faker.fake("{{internet.email}}"),
          password: faker.fake("{{internet.password}}"),
          createdAt: faker.fake("{{date.recent}}"),
          modifiedAt: faker.fake("{{date.recent}}"),
        })
        i++;
      }
    }

    await User.insertMany(users);

    db.connection.close();
  }
  catch (err) {
    console.log(err)
  }
})()