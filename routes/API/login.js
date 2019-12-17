var express = require('express');
var router = express.Router();
const User = require('../models/users');
const { compare } = require("../../utils/bc");

/* Admit register */
router.post('/user/login', async (req, res) => {
    try {
        console.log(req.body.email)
        const user = await User.where({ email: req.body.email })
        console.log(user[0].password)
        const  data = await compare(req.body.password, user[0].password);
        if (data) {
            res.status(200);
            res.json({
                data: user
            });
            return;
        };
        res.status(403);
            res.json({
                data: data
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
