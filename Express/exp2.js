const http = require("http")
const server = http.createServer((req,res)=>{
    console.log("Method:",req.method)
    console.log("URL:",req.url);
    res.end("Request Recived");
})

server.listen(3002,()=>{
    console.log("Server runing on port 3002")
})