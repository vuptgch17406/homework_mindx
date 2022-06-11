const express = require("express");
const listMovieRouter = express.Router();
const ListMovie = require("../constants/ListMovie");

listMovieRouter.get("/", (req, res) => {
  if (req.userRole === "guest") {
    const listMovie = ListMovie.filter((el) => {
      return el.type === "free";
    });
    res.send(listMovie);
  } else {
    res.send(ListMovie);
  }
});

listMovieRouter.post("/", (req, res) => {
  if (req.userRole !== "admin") {
    res.json("Unauthorized");
    res.json(401);
    return;
  }
  ListMovie.push(req.body);
  res.json(ListMovie);
});

module.exports = listMovieRouter;
