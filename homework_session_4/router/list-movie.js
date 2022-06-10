const express = require("express");
const listMovieRouter = express.Router();
const ListMovie = require("../constants/ListMovie");

listMovieRouter.get("/", (req, res) => {
  if (req.guestRole === "guest") {
    const listMovie = ListMovie.filter((el) => {
      return el.type === "free";
    });
    res.send(listMovie);
  } else {
    res.send(ListMovie);
  }
});

listMovieRouter.post("/", (req, res) => {
  if (req.guestRole !== "guest" && req.guestRole !== "member") {
    res.json("Unauthorized");
    res.json(401);
    return;
  }
  const messageBody = req.body;
  const index = ListMovie.findIndex((el) => {
    return messageBody.id === el.id;
  });
  res.json(Student);
});

module.exports = listMovieRouter;
