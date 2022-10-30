import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos = [...state.todos, action.payload];
      // state.todos.push(action.payload) IMMER
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});
console.log('todoSlice', todoSlice);
export const { addTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
