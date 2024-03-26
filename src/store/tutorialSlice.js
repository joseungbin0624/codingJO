// tutorialSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTutorials } from '../services/tutorialService';

export const fetchAllTutorials = createAsyncThunk(
  'tutorial/fetchAllTutorials',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllTutorials();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState: {
    loading: false,
    tutorials: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTutorials.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllTutorials.fulfilled, (state, action) => {
        state.loading = false;
        state.tutorials = action.payload;
      })
      .addCase(fetchAllTutorials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tutorialSlice.reducer;
