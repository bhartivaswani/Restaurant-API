const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.end.NODE_DEV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
