const express = require('express');
const router = express.Router();

let cars = [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Audi' },
    { id: 3, name: 'Toyota' }
];

router.get('/read', (req, res) => {
    res.json(cars);
});

router.post('/insert', (req, res) => {
    const car = req.body;
    cars.push(car);

    res.json({
        message: 'Car added successfully',
        car: car
    });
});

router.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const car = cars.find(c => c.id === id);

    if (car) {
        car.name = req.body.name;

        res.json({
            message: 'car updated successfully',
            car: car
        });
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
});

router.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = cars.findIndex(c => c.id === id);

    if (index !== -1) {
        const deletedcar = cars.splice(index, 1);

        res.json({
            message: 'Car deleted successfully',
            car: deletedcar[0]
        });
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
});

module.exports = router;
