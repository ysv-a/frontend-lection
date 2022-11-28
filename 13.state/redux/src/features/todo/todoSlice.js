import { createSlice } from '@reduxjs/toolkit'

let nextTodoId = 0

const initialState = {
  list: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: nextTodoId++,
        text: action.payload,
        completed: false,
      })
    },
    toggleTodo: (state, action) => {
      state.list = state.list.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      )
    },
  },
})

export const { addTodo, toggleTodo } = todoSlice.actions

export const selectTodoList = (state) => state.todo.list

export default todoSlice.reducer
