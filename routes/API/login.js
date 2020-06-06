var express = require("express");
var router = express.Router();
const User = require("../models/users");
const { compare } = require("../../utils/bc");
const jwt = require("jsonwebtoken");
let localSecret;
if (!process.env.SECRET) {
  localSecret = require("../../secret.json");
}
let secret = process.env.SECRET ? process.env.SECRET : localSecret.Secret_KEY;

/* Admit register */
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.find().where({ email: req.body.email }).exec();
    if (!user.length) {
      res.status(403);
      res.json({
        data: {
          error: "error",
        },
      });
      return;
    }
    const data = await compare(req.body.password, user[0].password);

    if (data) {
      let token = jwt.sign({ username: user[0].firstname }, secret, {
        expiresIn: "24h",
      });

      res.status(200);
      res.json({
        data: {
          userId: user[0]._id,
          token: token,
        },
      });
      return;
    }
    res.status(403);
    res.json({
      data: {
        error: "error",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({
      data: {
        error: error,
      },
    });
  }
});

module.exports = router;
