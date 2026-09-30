const express = require('express')
const app = express();
function logger(req,res,next){
    console.log(`${req.method} ${req.url}`);

}
app.use(logger);
app.get("/",(req,res)=>{
    res.send("Home page");
})
app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(3001,()=>{
    console.log("serever runnint on port 3001");
})