import api from '../utils/api';

export const getUserFavorites = async (userId) => {
  try {
    const response = await api.get(`/favorites/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch user favorites: ${error.response?.data?.message || error.message}`);
  }
};

export const addFavorite = async (userId, courseId) => {
  try {
    const response = await api.post('/favorites', { userId, courseId });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to add favorite: ${error.response?.data?.message || error.message}`);
  }
};

export const removeFavorite = async (favoriteId) => {
  try {
    const response = await api.delete(`/favorites/${favoriteId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to remove favorite: ${error.response?.data?.message || error.message}`);
  }
};

// 추가된 부분: 특정 사용자가 특정 코스를 좋아요 했는지 확인하는 함수
export const checkFavorite = async (userId, courseId) => {
  try {
    // 이 예시에서는 모든 사용자의 좋아요 목록을 가져와 필터링합니다.
    // 실제 구현에서는 백엔드 API가 특정 사용자와 코스에 대한 좋아요 상태를 직접 확인할 수 있어야 합니다.
    const favorites = await getUserFavorites(userId);
    return favorites.some(favorite => favorite.courseId === courseId);
  } catch (error) {
    throw new Error(`Failed to check favorite status: ${error.response?.data?.message || error.message}`);
  }
};
