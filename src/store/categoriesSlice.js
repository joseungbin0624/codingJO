// categoriesSlice.js 파일 내

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '../services/categoryService';

// fetchCategories 액션 크리에이터 정의
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    loading: false,
    categories: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// 셀렉터 함수 추가
export const selectCategories = (state) => state.categories.categories;

export default categoriesSlice.reducer;
