// searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { performSearch } from '../services/searchService';

export const executeSearch = createAsyncThunk(
  'search/executeSearch',
  async (query, { rejectWithValue }) => {
    try {
      const data = await performSearch(query);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    loading: false,
    results: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(executeSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(executeSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(executeSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default searchSlice.reducer;
