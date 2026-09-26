const http = require("http")
const server = http.createServer((req, res) => {

    if(req.method==="GET"&& req.url==="/"){
        res.end("Home page");
    }else if(req.method==="GET" && req.url==="/about"){
        res.end("About page");
    }else if(req.method==="GET" && req.url==="/Contact"){
        res.end("Contact page");
    }else{
        res.statusCode=404;
        res.end("Page not found");
    }

}); 
server.listen(3001,()=>{
    console.log("Serverrunnng on port 3001");
})