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

listMovieRouter.put("/", (req, res) => {
  if (req.adminRole === "admin") {
  }
});

module.exports = listMovieRouter;
