const express = require('express');
const app = express();

app.use(express.json());

const carRoutes = require('./routes/cars');

app.use('/', carRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
