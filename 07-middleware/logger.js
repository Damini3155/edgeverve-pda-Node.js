function logger(req, res, next) {
  const time = new Date().toISOString(); 
  console.log(`${time} - ${req.method} ${req.url}`);
  next(); // Tell express middleware processing is completed
}

module.exports = logger;
