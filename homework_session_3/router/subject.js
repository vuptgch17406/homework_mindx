const express = require("express");
const subjectRouter = express.Router();

const subjects = [
  {
    id: 1,
    name: "Toan",
  },
  {
    id: 2,
    name: "Van",
  },
  {
    id: 3,
    name: "Anh",
  },
];

subjectRouter.get("/", (req, res) => {
  console.log("this is request from client");
  res.json(subjects);
});

subjectRouter.post("/", (req, res) => {
  res.json(subjects);
});
module.exports = subjectRouter;
