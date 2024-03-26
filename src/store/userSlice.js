// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile, updateUserProfile } from '../services/userService';

export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (userId, { rejectWithValue }) => {
    try {
      const data = await getUserProfile(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfileAction = createAsyncThunk(
  'user/updateUserProfile',
  async ({ userId, profileData }, { rejectWithValue }) => {
    try {
      const data = await updateUserProfile(userId, profileData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfileAction.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      });
  },
});

export default userSlice.reducer;

