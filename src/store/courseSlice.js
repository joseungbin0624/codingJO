// courseSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCourses, getCourseDetails } from '../services/courseService';

export const fetchAllCourses = createAsyncThunk(
  'course/fetchAllCourses',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllCourses();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCourseDetails = createAsyncThunk(
  'course/fetchCourseDetails',
  async (courseId, { rejectWithValue }) => {
    try {
      const data = await getCourseDetails(courseId);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    coursesLoading: false,
    courses: [],
    courseDetails: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCourses.pending, (state) => {
        state.coursesLoading = true;
      })
      .addCase(fetchAllCourses.fulfilled, (state, action) => {
        state.coursesLoading = false;
        state.courses = action.payload;
      })
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.coursesLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCourseDetails.pending, (state) => {
        state.coursesLoading = true;
      })
      .addCase(fetchCourseDetails.fulfilled, (state, action) => {
        state.coursesLoading = false;
        state.courseDetails = action.payload;
      })
      .addCase(fetchCourseDetails.rejected, (state, action) => {
        state.coursesLoading = false;
        state.error = action.payload;
      });
  },
});

export default courseSlice.reducer;

