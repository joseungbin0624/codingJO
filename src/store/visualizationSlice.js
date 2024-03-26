// visualizationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllVisualizations } from '../services/visualizationService';

export const fetchAllVisualizations = createAsyncThunk(
  'visualization/fetchAllVisualizations',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllVisualizations();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const visualizationSlice = createSlice({
  name: 'visualization',
  initialState: {
    loading: false,
    visualizations: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllVisualizations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllVisualizations.fulfilled, (state, action) => {
        state.loading = false;
        state.visualizations = action.payload;
      })
      .addCase(fetchAllVisualizations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default visualizationSlice.reducer;

