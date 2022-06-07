const express = require("express");
const app = express();
const studentRouter = require("./router/student");
const teacherRouter = require("./router/teacher");
const subjectRouter = require("./router/subject");

const LoggingMiddleware = require("./middleware/logging_middleware");
const unauthorizedMiddleware = require("./middleware/unauthorized_middleware");
const CountMiddleware = require("./middleware/count_middleware");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ extended: true }));
app.use(
  "/student",
  LoggingMiddleware,
  unauthorizedMiddleware,
  CountMiddleware,
  studentRouter
);
app.use(
  "/teacher",
  LoggingMiddleware,
  unauthorizedMiddleware,
  CountMiddleware,
  teacherRouter
);
app.use(
  "/subject",
  LoggingMiddleware,
  unauthorizedMiddleware,
  CountMiddleware,
  subjectRouter
);

app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("Application listening on");
});
