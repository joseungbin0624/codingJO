import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authService from '../services/authService';

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await authService.login(userData);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
  try {
    const response = await authService.register(userData);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await authService.logout();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const checkUsername = createAsyncThunk('auth/checkUsername', async ({ username }, { rejectWithValue }) => {
  try {
    const response = await authService.checkUsername(username);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  user: null,
  status: 'idle',
  error: null,
  isUsernameUnique: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
      state.isUsernameUnique = true;
    },
  },
  extraReducers: (builder) => {
    // 해당 부분에 대한 처리 로직...
  },
});

export const { resetAuthState } = authSlice.actions;

export default authSlice.reducer;
