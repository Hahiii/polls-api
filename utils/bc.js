const bcrypt = require('bcryptjs');
const { promisify } = require('util');

const hash = promisify(bcrypt.hash);
const genSalt = promisify(bcrypt.genSalt);


//  will be called in the POST registration route
exports.hash = (password => {
    return genSalt().then(
        salt => {
            return hash(password, salt)
        })

});

// will be called in the POST login route
exports.compare = promisify(bcrypt.compare);
// Compare takes 2 arguments
// 1. the password user sends from the client
// 2. the hash password from the Database
// IT RETURN A BOOLEAN