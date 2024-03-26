// forumSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllForums } from '../services/forumService';

export const fetchAllForums = createAsyncThunk(
  'forum/fetchAllForums',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllForums();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    loading: false,
    forums: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllForums.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllForums.fulfilled, (state, action) => {
        state.loading = false;
        state.forums = action.payload;
      })
      .addCase(fetchAllForums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default forumSlice.reducer;
