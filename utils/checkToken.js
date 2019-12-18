let jwt = require('jsonwebtoken');
const secret = require('../secret.json');

let checkToken = async (req, res, next) => {
    let token = req.headers['auth'];
    console.log(token);
    
    // Remove Bearer from string


    if (token) {
        token = token.slice(7, token.length);
        const isValid = await jwt.verify(token, secret.Secret_KEY);


        if (!isValid) {
            return res.json({
                success: false,
                message: 'Token is not valid'
            });
        } else {

            next();
        }

    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

module.exports =  checkToken;