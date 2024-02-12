const express = require('express');
const router = express.Router();
const { addFavorite, removeFavorite, getUserFavorites } = require('../controllers/favoritesController');

router.post('/', addFavorite);
router.delete('/:userId/:courseId', removeFavorite);
router.get('/:userId', getUserFavorites);

module.exports = router;

