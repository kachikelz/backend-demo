/**
 * uncaught errors in server
 * @function ErrorHandler
 * @param  {string} somebody - Somebody's name.
 * @param {object} res
 * @param {object} req
 * @param {function} next
 * @returns {function|object} - Function next() or json object
 */

const errorHandler = (error, req, res, next) => {
  res.status(error.status || 500);

  if (process.env.NODE._ENV === 'development') {
    return res.json({
      errors: {
        global: error.message,
        error
      }
    });
  }

  if (res.headerSent) {
    return next(error);
  }
  res.json({
    errors: {
      global: error.message,
      error: {}
    }
  });
};

export default errorHandler;
