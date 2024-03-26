// eventSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllEvents } from '../services/eventService';

export const fetchAllEvents = createAsyncThunk(
  'event/fetchAllEvents',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllEvents();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const eventSlice = createSlice({
  name: 'event',
  initialState: {
    loading: false,
    events: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchAllEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default eventSlice.reducer;

