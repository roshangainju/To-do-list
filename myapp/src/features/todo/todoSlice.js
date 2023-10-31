import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState={
    todos:[
        {id:1, text:"To Learn React-Redux and Redux-toolkit"}
    ]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter(
                (todo)=>todo.id !==action.payload
            )
        },
      

    }
})

export const {addTodo, removeTodo, updateTodo}=todoSlice.actions

export default todoSlice.reducer