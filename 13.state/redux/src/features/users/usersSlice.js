import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchUsers, deleteUser } from '../../api/usersApi'
import { updateUserAsync } from './userSlice'

const initialState = {
  list: [],
  status: 'idle',
}

export const getUsersAsync = createAsyncThunk('users/index', async () => {
  return await fetchUsers()
})

export const removeUserAsync = createAsyncThunk('users/remove', async (id) => {
  return await deleteUser(id)
})

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.list = action.payload
      })
      .addCase(getUsersAsync.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(removeUserAsync.fulfilled, (state, action) => {
        const id = action.meta.arg
        state.list = state.list.filter((user) => user.id != id)
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        const id = action.payload.id
        state.list = state.list.map((user) => {
          if (user.id == id) {
            return action.payload
          }
          return user
        })
      })
  },
})

export const getUserCount = (state) => state.users.list.length
export const selectUsers = (state) => state.users.list
export const getStatus = (state) => state.users.status

export default usersSlice.reducer
