const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginRouter = require("./router/login");
const listMovieRouter = require("./router/list-movie");
const Admin = require("./constants/Admin");
const authenMiddleware = require("./middleware/authen_mdw");

app.get("/", (req, res) => {
  res.json(Admin);
  //   res.json("Hello world");
});
app.use(bodyParser.json({ extended: true }));
app.use("/list-movie", authenMiddleware, listMovieRouter);
app.use("/login", loginRouter);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
