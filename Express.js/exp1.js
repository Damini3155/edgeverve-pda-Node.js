//Http is built in module of node js
//const http = require("http")

// HTTP is a built-in module of Node.js

const http = require("http");

const server = http.createServer((req, res) => {

    res.end("Hello from Node.js");

});

server.listen(3001, () => {

    console.log("Server running on port 3000");

});

