const favoritesService = require('../services/favoritesService');

// 즐겨찾기 추가
exports.addFavorite = async (req, res) => {
    try {
        const favorite = await favoritesService.addFavorite(req.body.userId, req.body.courseId);
        res.status(201).json(favorite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 즐겨찾기 제거
exports.removeFavorite = async (req, res) => {
    try {
        const favorite = await favoritesService.removeFavorite(req.params.userId, req.params.courseId);
        res.status(200).json(favorite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 사용자 즐겨찾기 조회
exports.getUserFavorites = async (req, res) => {
    try {
        const favorites = await favoritesService.getUserFavorites(req.params.userId);
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

