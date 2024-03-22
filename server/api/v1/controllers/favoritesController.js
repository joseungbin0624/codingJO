const favoritesService = require('../services/favoritesService');

exports.addFavorite = async (req, res) => {
    try {
        const favorite = await favoritesService.addFavorite(req.body.userId, req.body.courseId);
        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeFavorite = async (req, res) => {
    try {
        const favorite = await favoritesService.removeFavorite(req.params.userId, req.params.courseId);
        res.status(200).json(favorite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserFavorites = async (req, res) => {
    try {
        const favorites = await favoritesService.getUserFavorites(req.params.userId);
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
