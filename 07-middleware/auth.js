function checkAuth(req, res, next) {
  const isLoggedIn = true;

  if (isLoggedIn) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

module.exports = checkAuth;
