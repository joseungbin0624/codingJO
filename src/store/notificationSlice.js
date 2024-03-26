
// notificationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserNotifications } from '../services/notificationService';

export const fetchUserNotifications = createAsyncThunk(
  'notification/fetchUserNotifications',
  async (userId, { rejectWithValue }) => {
    try {
      const data = await getUserNotifications(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    loading: false,
    notifications: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
      })
      .addCase(fetchUserNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default notificationSlice.reducer;
