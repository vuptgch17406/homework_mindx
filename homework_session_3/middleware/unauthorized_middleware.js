const users = [
  { username: "alice", apiKey: "alice@123" },
  { username: "bob", apiKey: "bob@123" },
  { username: "charlie", apiKey: "charlie@123" },
];

const studentMiddleware = (req, res, next) => {
  console.log("Request body: ", req.body);
  const index = users.findIndex((ele) => {
    return JSON.stringify(ele) === JSON.stringify(req.body);
  });
  const isUnauthorized = index < 0 ? true : false;
  if (isUnauthorized) {
    res.status(401);
    res.send("Unauthorized");
    return;
  }
  next();
};
module.exports = studentMiddleware;
