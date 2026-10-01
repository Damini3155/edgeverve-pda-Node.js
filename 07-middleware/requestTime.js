// requestTime middleware
// Attaches the current request timestamp to the req object
// so route handlers can access it via req.requestTime

function requestTime(req, res, next) {
  req.requestTime = new Date(); // store current time on request object
  next(); // IMPORTANT: call next() to pass control to next middleware/route
}

module.exports = requestTime;
