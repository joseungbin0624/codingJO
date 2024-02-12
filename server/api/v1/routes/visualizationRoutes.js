const express = require('express');
const router = express.Router();
const { createVisualization, getAllVisualizations, getVisualizationById } = require('../controllers/visualizationController');

router.post('/', createVisualization);
router.get('/', getAllVisualizations);
router.get('/:id', getVisualizationById);

module.exports = router;

