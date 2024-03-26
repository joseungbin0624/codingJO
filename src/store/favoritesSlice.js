// favoritesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserFavorites, addFavorite, removeFavorite } from '../services/favoritesService';

// 사용자의 즐겨찾기 목록을 가져오는 비동기 액션
export const fetchUserFavorites = createAsyncThunk(
  'favorites/fetchUserFavorites',
  async (userId, { rejectWithValue }) => {
    try {
      // 사용자 ID를 기반으로 즐겨찾기 목록 데이터 요청
      return await getUserFavorites(userId);
    } catch (error) {
      // 에러 처리
      return rejectWithValue(error.message);
    }
  }
);

// 즐겨찾기 항목을 추가하는 비동기 액션
export const addFavoriteItem = createAsyncThunk(
  'favorites/addFavoriteItem',
  async ({ userId, itemId }, { rejectWithValue }) => {
    try {
      // 사용자 ID와 항목 ID를 기반으로 즐겨찾기 추가
      return await addFavorite(userId, itemId);
    } catch (error) {
      // 에러 처리
      return rejectWithValue(error.message);
    }
  }
);

// 즐겨찾기 항목을 제거하는 비동기 액션
export const removeFavoriteItem = createAsyncThunk(
  'favorites/removeFavoriteItem',
  async ({ userId, itemId }, { rejectWithValue }) => {
    try {
      // 사용자 ID와 항목 ID를 기반으로 즐겨찾기 제거
      await removeFavorite(userId, itemId);
      // 제거된 항목 ID 반환
      return itemId;
    } catch (error) {
      // 에러 처리
      return rejectWithValue(error.message);
    }
  }
);

// 즐겨찾기 상태를 관리하는 슬라이스 정의
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 즐겨찾기 목록 요청 중 상태 처리
      .addCase(fetchUserFavorites.pending, (state) => {
        state.loading = true;
      })
      // 즐겨찾기 목록 요청 성공 시 상태 처리
      .addCase(fetchUserFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      // 즐겨찾기 목록 요청 실패 시 상태 처리
      .addCase(fetchUserFavorites.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // 즐겨찾기 항목 추가 성공 시 상태 처리
      .addCase(addFavoriteItem.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // 즐겨찾기 항목 제거 성공 시 상태 처리
      .addCase(removeFavoriteItem.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default favoritesSlice.reducer;
