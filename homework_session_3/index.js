const express = require("express");
const app = express();
const studentRouter = require("./router/student");
const teacherRouter = require("./router/teacher");
const subjectRouter = require("./router/subject");

const LoggingMiddleware = require("./middleware/logging_middleware");
const unauthorizedMiddleware = require("./middleware/unauthorized_middleware");
// const CountMiddleware = require("./middleware/count_middleware");
const logMdwFactory = require("./middleware/count_middleware");
const bodyParser = require("body-parser");

app.use(bodyParser.json({ extended: true }));
app.use(
  "/student",
  LoggingMiddleware,
  unauthorizedMiddleware,
  logMdwFactory,
  studentRouter
);
app.use(
  "/teacher",
  LoggingMiddleware,
  unauthorizedMiddleware,
  logMdwFactory,
  teacherRouter
);
app.use(
  "/subject",
  LoggingMiddleware,
  unauthorizedMiddleware,
  logMdwFactory,
  subjectRouter
);

app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("Application listening on");
});
