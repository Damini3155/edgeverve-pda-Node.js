const express = require('express');
const app = express();

app.use(express.json());

// Users list
const users = [
    { username: 'Damini', role: 'Admin', lastAccess: '2026-10-20' },
    { username: 'Ravi', role: 'User', lastAccess: '2026-10-18' },
    { username: 'Priya', role: 'Manager', lastAccess: '2026-10-05' },
    { username: 'Amit', role: 'User', lastAccess: '2026-10-22' }
];

// Middleware for request logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

// GET - Retrieve all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET - Filter users who accessed within the last 10 days
app.get('/users/recent', (req, res) => {
    const currentDate = new Date();
    const tenDaysAgo = new Date();

    tenDaysAgo.setDate(currentDate.getDate() - 10);

    const recentUsers = users.filter(user => {
        const lastAccessDate = new Date(user.lastAccess);
        return lastAccessDate >= tenDaysAgo &&
               lastAccessDate <= currentDate;
    });

    res.json(recentUsers);
});

// Start server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
