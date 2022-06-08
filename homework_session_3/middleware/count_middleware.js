const counts = [
  { user: "alice", student: 0, teacher: 0, subject: 0 },
  { user: "bob", student: 0, teacher: 0, subject: 0 },
];
const countMiddleware = (req, res, next) => {
  counts.map((res) => {
    res.user === req.body.username && req.baseUrl === "/student"
      ? res.student++
      : res.user === req.body.username && req.baseUrl === "/teacher"
      ? res.teacher++
      : res.user === req.body.username && req.baseUrl === "/subject"
      ? res.subject++
      : console.log("New count: ");

    return res;
    // if (res.user === req.body.username && req.baseUrl === "/student") {
    //   res.student++;
    // } else if (res.user === req.body.username && req.baseUrl === "/teacher") {
    //   res.teacher++;
    // } else if (res.user === req.body.username && req.baseUrl === "/subject") {
    //   res.subject++;
    // }
  });
  console.log(counts);
  next();
};

module.exports = countMiddleware;
