const express = require('express');
const router = express.Router();
const { plants } = require('./plantsData');
const paginationController = require('./paginationController');

// GET /plants route returns a paginated list of plants
router.get('/', (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;
  const paginatedPlants = paginationController(plants, page, pageSize);
  res.json(paginatedPlants);
});

// GET /plants/:id route returns the plant with the specified ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const plant = plants.find(p => p.id === id);
  if (!plant) {
    return res.status(404).json({ error: 'Plant not found' });
  }
  res.json(plant);
});

// POST /plants route creates a new plant
router.post('/', (req, res) => {
  const { name, latinName, description, price, size } = req.body;
  const newPlant = { id: Date.now().toString(), name, latinName, description, price, size };
  plants.push(newPlant);
  res.status(201).json(newPlant);
});

module.exports = router;
