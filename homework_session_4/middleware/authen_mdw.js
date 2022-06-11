const jwt = require("jsonwebtoken");
const jwtKey = require("../constants/key");
const listUser = require("../constants/listUser");

function authenMiddleware(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  let decode;
  try {
    decode = jwt.verify(token, jwtKey);
  } catch (err) {
    res.json(err.message);
    res.status(401);
    return;
  }

  if (decode) {
    const index = listUser.findIndex((el) => {
      return el.id === decode.id && el.name === decode.name;
    });

    if (index < 0) {
      res.json("User is not existed");
      res.status(401);
      return;
    }
    req["userRole"] = listUser[index].role;

    next();
  }
}

module.exports = authenMiddleware;
