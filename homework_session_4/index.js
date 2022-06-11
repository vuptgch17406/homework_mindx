const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const listMovieRouter = require("./router/list-movie");
const loginRouter = require("./router/login");
const authenMiddleware = require("./middleware/authen_mdw");

app.use(bodyParser.json({ extended: true }));
app.use("/list-movie", authenMiddleware, listMovieRouter);
app.use("/login", loginRouter);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
