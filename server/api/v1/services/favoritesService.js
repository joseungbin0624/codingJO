const Favorite = require('../models/Favorite');

// 사용자 즐겨찾기 추가
async function addFavorite(userId, courseId) {
    let favorite = await Favorite.findOne({ user: userId });
    if (!favorite) {
        favorite = new Favorite({ user: userId, courses: [courseId] });
    } else {
        favorite.courses.push(courseId);
    }
    await favorite.save();
    return favorite;
}

// 사용자 즐겨찾기 제거
async function removeFavorite(userId, courseId) {
    const favorite = await Favorite.findOne({ user: userId });
    if (!favorite) {
        throw new Error('Favorites not found');
    }
    favorite.courses = favorite.courses.filter(course => course.toString() !== courseId);
    await favorite.save();
    return favorite;
}

// 사용자 즐겨찾기 조회
async function getUserFavorites(userId) {
    const favorites = await Favorite.findOne({ user: userId }).populate('courses');
    return favorites || { user: userId, courses: [] };
}

module.exports = {
    addFavorite,
    removeFavorite,
    getUserFavorites,
};

