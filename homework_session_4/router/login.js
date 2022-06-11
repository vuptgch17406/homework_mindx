const express = require("express");
const loginRouter = express.Router();
const jwt = require("jsonwebtoken");
const jwtKey = require("../constants/key");
const Admin = require("../constants/Admin");
const Member = require("../constants/Member");
const Guest = require("../constants/Guest");
const listUser = require("../constants/listUser");

loginRouter.post("/", (req, res) => {
  console.log("This is request body", req.body);
  const msgBody = req.body;
  const index = listUser.findIndex((el) => {
    return el.id === req.body.id && el.name === req.body.name;
  });

  const isUnAuthorize = index < 0;

  if (isUnAuthorize) {
    res.json("User is not existed");
    res.status(401);
    return;
  }

  const token = jwt.sign(msgBody, jwtKey);
  res.json({
    token,
  });
});

module.exports = loginRouter;
