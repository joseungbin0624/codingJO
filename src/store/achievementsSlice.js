// achievementsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAchievements } from '../services/achievementsService';

export const fetchAchievements = createAsyncThunk(
  'achievements/fetchAchievements',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAchievements();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAchievements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAchievements.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAchievements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default achievementsSlice.reducer;
