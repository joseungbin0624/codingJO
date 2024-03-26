// chatSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserChats } from '../services/chatService';

export const fetchUserChats = createAsyncThunk(
  'chat/fetchUserChats',
  async (userId, { rejectWithValue }) => {
    try {
      const data = await getUserChats(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    loading: false,
    chats: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserChats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserChats.fulfilled, (state, action) => {
        state.loading = false;
        state.chats = action.payload;
      })
      .addCase(fetchUserChats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default chatSlice.reducer;

