const jwt = require("jsonwebtoken");
const jwtKey = require("../constants/key");
const Admin = require("../constants/Admin");
const Member = require("../constants/Member");
const Guest = require("../constants/Guest");
const ListMovie = require("../constants/ListMovie");

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

  const indexAdmin = Admin.findIndex((el) => {
    return JSON.stringify(el) === JSON.stringify(req.body);
  });
  const indexMember = Member.findIndex((el) => {
    return JSON.stringify(el) === JSON.stringify(req.body);
  });
  if (indexAdmin < 0 && indexMember < 0) {
    res.status(401);
    res.json("User is not existed");
    return;
  }
  req["guestRole"] = "guest";
  req["adminRole"] = "admin";
  req["memberRole"] = "member";

  next();
}

module.exports = authenMiddleware;
