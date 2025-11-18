import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { bankAPI } from '../actions/bankAPI';


export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token
    if (!token) return thunkAPI.rejectWithValue('No token found')
    try {
      const answer = await bankAPI.getProfile(token)
      console.log('getUserProfile API answer:', answer)
      return {
        profile: answer?.body || answer
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  } 
);

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (profile, token, thunkAPI) => {
    try {
      const answer = await bankAPI.updateUserProfile(profile, token)
      console.log('updateUserProfile API answer:', answer)
      return {
        profile: answer?.body || answer
      }
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
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload
        state.loading = false
        console.log('getUserProfile case fulfilled :', action.payload)
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
        console.log('getUserProfile case rejected :', state, action)
      })
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