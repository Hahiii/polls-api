var express = require('express');
var router = express.Router();
const User = require('../models/users');
const { hash } = require("../../utils/bc");
const jwt = require("jsonwebtoken");
if (!process.env.SECRET) {
    const localSecret = require("../../secret.json");
}
let secret = process.env.SECRET ? process.env.SECRET : localSecret.Secret_KEY;

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

            let token = jwt.sign({ username: user.firstname },
                secret,
                {
                    expiresIn: '24h'
                }
            );
            res.status(200);
            res.json({
                data: {
                    userId: user._id,
                    token:token
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
