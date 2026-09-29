// Inspecting incoming HTTP request properties (method and URL)
const http = require("http");

const port = 3002;

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    res.end("Request Received");
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
