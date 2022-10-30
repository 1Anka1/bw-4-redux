import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name:"todos",
    initialState: {
        todos: []
    },
    reducers:{
        addTodo(state, action){
        state.todos = [...state.todos, action.payload]
       // state.todos.push(action.payload) IMMER

        }
    }
})

export const { addTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer