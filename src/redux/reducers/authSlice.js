import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { bankAPI } from '../actions/bankAPI';


export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const answer = await bankAPI.login(userData);
      const token = answer.token || answer.body?.token || null
      if (token) localStorage.setItem('token', token)
      return {
        token: answer.token || answer.body?.token || null,
      };
    } catch (err) {
      const errorMsg = err.answer?.token?.errors || err.answer?.body?.errors || err.message;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

const initialState = {
  loading: false,
  token: null,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.profile = null,
      state.loading = false,
      state.token = null,
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;