const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const username = 'admin';
const password = '12345';
const secretKey = 'mysecretkey';

// POST - Login
app.post('/login', (req, res) => {
    const { username: user, password: pass } = req.body;

    if (user === username && pass === password) {
        const token = jwt.sign({ username: user }, secretKey, {
            expiresIn: '1h'
        });

        res.json({
            message: 'Login successful',
            token: token
        });
    } else {
        res.status(401).json({
            message: 'Invalid username or password'
        });
    }
});

// GET - Protected route
app.get('/protected', (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            message: 'Authentication token missing'
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, secretKey);

        res.json({
            message: `Welcome ${decoded.username}`,
            username: decoded.username
        });
    } catch (error) {
        res.status(401).json({
            message: 'Invalid or expired token'
        });
    }
});

// Start server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
