import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUser, updateUser } from '../../api/usersApi'

const initialState = {
  model: null,
  status: 'idle',
}

export const getUserAsync = createAsyncThunk('user/show', async (id) => {
  return await fetchUser(id)
})
export const updateUserAsync = createAsyncThunk('user/update', async (data) => {
  return await updateUser(data)
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUserAsync.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.model = action.payload
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.model = action.payload
      })
  },
})

export const selectedUser = (state) => state.user.model

export default userSlice.reducer
