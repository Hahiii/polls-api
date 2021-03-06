let jwt = require("jsonwebtoken");
let localSecret;
if (!process.env.SECRET) {
  localSecret = require("../secret.json");
}

let secret = process.env.SECRET ? process.env.SECRET : localSecret.Secret_KEY;

let checkToken = async (req, res, next) => {
  let token = req.headers["auth"];

  // Remove Bearer from string

  if (token) {
    token = token.slice(7, token.length);
    const isValid = await jwt.verify(token, secret);

    if (!isValid) {
      return res.json({
        success: false,
        message: "Token is not valid",
      });
    } else {
      next();
    }
  } else {
    return res.json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

module.exports = checkToken;
