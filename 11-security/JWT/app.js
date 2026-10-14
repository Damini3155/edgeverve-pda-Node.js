import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const port = 3001;
app.use(express.json());

const jWT_SECRET = 'secretkey123';

const user = {
    id: 1,
    username: 'admin',
    password: 'pass123'
};

app.get("/",(req,res)=>{
    res.send("JWT authentication server running ");
});