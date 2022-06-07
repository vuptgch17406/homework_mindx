function LoggingMiddleware(req, res, next) {
  console.log("New request at", Math.random());
  next();
}

module.exports = LoggingMiddleware;
