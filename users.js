const express = require('express');
const router = express.Router();

const users = [
    { username: 'Damini', role: 'Admin', lastAccess: '2026-10-20' },
    { username: 'Ravi', role: 'User', lastAccess: '2026-10-18' },
    { username: 'Priya', role: 'Manager', lastAccess: '2026-10-05' },
    { username: 'Amit', role: 'User', lastAccess: '2026-10-22' }
];

// Filter users who accessed within the last 10 days
router.get('/', (req, res) => {
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

// Retrieve all users
router.get('/users', (req, res) => {
    res.json(users);
});

// Retrieve recent users
router.get('/users/recent', (req, res) => {
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

module.exports = router;
