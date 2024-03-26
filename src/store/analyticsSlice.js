// analyticsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAnalyticsData } from '../services/analyticsService';

export const fetchAnalyticsData = createAsyncThunk(
  'analytics/fetchAnalyticsData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAnalyticsData();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalyticsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalyticsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAnalyticsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default analyticsSlice.reducer;
