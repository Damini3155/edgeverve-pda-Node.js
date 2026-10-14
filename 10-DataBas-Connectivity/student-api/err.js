// const age =15;
// if(age<18){
//     throw new Error("You must be at least 18 years old.");
// }


// try{
//     fs.readFileSync("Student.text", "utf8",(error,data)=>{
//         if(error){
//             throw error;
//         }
//         console.log(data);
//     });
// } catch (error) {
//     console.error("An error occurred:", error.message);
// }

// const fs = require("fs");
//  fs.readFile("Student.text", "utf8",(error,data)=>{
//     if(error){
//         console.log(error.message);
//     }
//     console.log(data);
//  });

const fs = require("fs/promises");
async function readStudents(){
    try{
        const data = await fs.readFile("Student.text", "utf8");
        console.log(data);
    } catch (error) {
        console.log("Failed to read the file:", error.message); 
    }
}
readStudents();