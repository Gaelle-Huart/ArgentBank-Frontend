import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { bankAPI } from '../actions/bankAPI';


export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token
    if (!token) return thunkAPI.rejectWithValue('No token found')
    try {
      const answer = await bankAPI.getProfile(token)
      return answer.body;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || err)
    }
  } 
);

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (profileData, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) return thunkAPI.rejectWithValue('No token found');
    try {
      const answer = await bankAPI.updateUserProfile(profileData, token)
      return answer.body
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || err)
    }
  }
);

const initialState = {
  profile: null,
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      // GET PROFILE
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload
        state.loading = false
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
      })
      // UPDATE PROFILE
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.profile = action.payload || state.profile
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
        state.profile = null
      })
  }
});

export default userSlice.reducer;