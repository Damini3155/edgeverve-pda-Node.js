const winston = require('winston');
const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(winston.format.simple()),
  transports: [
    new winston.transports.Console(),
    new winston.timestamp(),
    new winston.transports.File({ filename: "app.log" }),
  ]
});

module.exports = logger;