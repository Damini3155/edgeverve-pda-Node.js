// Basic HTTP server routing using built-in http module
const http = require("http");

const port = 3001;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.end("Home page");
    } else if (req.method === "GET" && req.url === "/about") {
        res.end("About page");
    } else if (req.method === "GET" && (req.url === "/contact" || req.url === "/Contact")) {
        res.end("Contact page");
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
