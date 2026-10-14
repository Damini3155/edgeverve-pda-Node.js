const fs = require('fs');

try{
    const data = fs.readFileSync("data.json", "utf8");
    console.log(data);
} catch(err) {
    console.log("somthing went wrong");
    console.error('Error occurred:', err);
}