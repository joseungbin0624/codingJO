// feedbackSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitFeedback } from '../services/feedbackService';

// 사용자 피드백 제출 비동기 액션
export const submitUserFeedback = createAsyncThunk(
  'feedback/submitUserFeedback',
  async (feedbackData, { rejectWithValue }) => {
    try {
      // 피드백 데이터를 기반으로 피드백 제출 요청
      const response = await submitFeedback(feedbackData);
      return response;
    } catch (error) {
      // 에러 처리
      return rejectWithValue(error.message);
    }
  }
);

// 피드백 상태를 관리하는 슬라이스 정의
const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: {
    submitting: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 피드백 제출 요청 중 상태 처리
      .addCase(submitUserFeedback.pending, (state) => {
        state.submitting = true;
      })
      // 피드백 제출 요청 성공 시 상태 처리
      .addCase(submitUserFeedback.fulfilled, (state) => {
        state.submitting = false;
        state.success = true;
      })
      // 피드백 제출 요청 실패 시 상태 처리
      .addCase(submitUserFeedback.rejected, (state, action) => {
        state.submitting = false;
        state.error = action.payload;
      });
  },
});

export default feedbackSlice.reducer;
