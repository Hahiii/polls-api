var express = require('express');
var router = express.Router();
const User = require('../models/users');
const { hash } = require("../../utils/bc");
const jwt = require("jsonwebtoken");
const secret = require("../../secret.json");

/* Admit register */
router.post('/user/register', async (req, res) => {
    try {
        const { password } = req.body;
        const hashedPassword = await hash(`${password}`);
        req.body.password = hashedPassword;
        const user = await new User(req.body);

        user.save(function (err) {
            if (err) {
                res.json({
                    data: err.message
                })
                return;
            };
            res.status(200);

            let token = jwt.sign({ username: user.firstname },
                secret.Secret_KEY,
                {
                    expiresIn: '24h'
                }
            );

            console.log(token, 'token');

            res.json({
                data: {
                    // remove pass field before returning the user here
                    user,
                    token
                }
            });
        });
    }
    catch (error) {
        res.status(500);
        res.json({
            error: error
        });
    }
})

module.exports = router;
