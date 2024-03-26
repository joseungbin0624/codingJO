// collaborationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sendCollaborationRequest } from '../services/collaborationService';

export const sendCollaboration = createAsyncThunk(
  'collaboration/sendCollaboration',
  async (collaborationDetails, { rejectWithValue }) => {
    try {
      const data = await sendCollaborationRequest(collaborationDetails);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const collaborationSlice = createSlice({
  name: 'collaboration',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendCollaboration.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(sendCollaboration.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendCollaboration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export default collaborationSlice.reducer;

