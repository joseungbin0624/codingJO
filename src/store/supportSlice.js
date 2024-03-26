// supportSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitSupportTicket } from '../services/supportService';

export const submitTicket = createAsyncThunk(
  'support/submitTicket',
  async (ticketData, { rejectWithValue }) => {
    try {
      const data = await submitSupportTicket(ticketData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const supportSlice = createSlice({
  name: 'support',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitTicket.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitTicket.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default supportSlice.reducer;
