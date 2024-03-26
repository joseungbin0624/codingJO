// reviewSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCourseReviews, createReview } from '../services/reviewService';

export const fetchCourseReviews = createAsyncThunk(
  'review/fetchCourseReviews',
  async (courseId, { rejectWithValue }) => {
    try {
      const data = await getCourseReviews(courseId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const submitCourseReview = createAsyncThunk(
  'review/submitCourseReview',
  async ({ courseId, reviewData }, { rejectWithValue }) => {
    try {
      const data = await createReview(courseId, reviewData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    loading: false,
    reviews: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourseReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourseReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchCourseReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(submitCourseReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  },
});

export default reviewSlice.reducer;
