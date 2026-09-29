// HTTP is a built-in module of Node.js for creating web servers
const http = require("http");

const port = 3001;

const server = http.createServer((req, res) => {
    res.end("Hello from Node.js");
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
