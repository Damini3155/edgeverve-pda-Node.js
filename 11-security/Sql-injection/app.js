const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



async function  startServer() {
    const db = await mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Damini@3155",
        database: "security-lab",
    });

    console.log("Connected to MYSQL");

    app.get('/unsafe-login', async (req, res) => {
        const username = req.query.username || '';
        const password = req.query.password || '';

        const sql = "select id from users where username = '" + username + "' and password = '" + password + "' limit 1";
            try{
                const [rows] = await db.query(sql);
                if(rows.length > 0) {
                    res.send("Login Successful");
                } else {
                    res.status(401).send("Invalid Username or Password");
                }
            } catch (error) {
                console.log(error.message);
                res.send("unable to process your request");
            }
    });

    app.get('/safe-login', async (req, res) => {
        const username = req.query.username || '';
        const password = req.query.password || '';
        try {
            const [rows] = await db.execute("select id from users where username = ? and password = ? limit 1", [username, password]);  
        } catch (error) {
            console.log(error.message);
            res.send("unable to process your request");
        }
    });

    app.get('/', (req, res) => {
        res.send(`
            <h1>My sql injection security</h1>
            <p>Sample username : student</p>
            <p>sample password : pass123</p>
            <p> Test post /unsafe-login? and /safe-login? </p>
        `);
    });

    app.listen(3001, () => {
        console.log("Server running at http://localhost:3001");
    });
}
    startServer().catch((err) => {
        console.error("Error starting server:", err);
    });

