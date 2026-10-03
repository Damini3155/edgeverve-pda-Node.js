const fs = require("fs");
fs.readdir("./data", (err, files) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Files in the directory:", files);
});