const notFound = (req, res, next) => {
  const error = new Error('Not Found');
  res.statusCode = 404;
  next(error);
};

const notFoundHandler = (err, req, res) => {
  res.status(err.status || 500).json({
    status: err.status ? 'fail' : 'error',
    message: err.message,
    stackTrace: err.stack,
  });
};

module.exports = {
  notFound,
  notFoundHandler,
};
