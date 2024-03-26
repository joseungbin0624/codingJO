// dashboardSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserActivities } from '../services/dashboardService';

export const fetchUserActivities = createAsyncThunk(
  'dashboard/fetchUserActivities',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getUserActivities();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    loading: false,
    activities: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserActivities.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserActivities.fulfilled, (state, action) => {
        state.loading = false;
        state.activities = action.payload;
      })
      .addCase(fetchUserActivities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default dashboardSlice.reducer;

