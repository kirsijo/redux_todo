import {createSlice} from '@reduxjs/toolkit';

const todoSLice = createSlice({
    name: "tasks",
    initialState:{
        taskList: [
            {id: 1, content:"Do grocery shopping"},
            {id: 2, content: 'Go for a run'}
        ]
        },
        reducers: {
            addTask: (state,action) => {
                let newTodoList = {
                    id: Math.random(),
                    content: action.payload.newContent
                }
                state.toDoList.push(newTodoList);
            },
            deleteTodo: (state,action) => {
                let {toDoList} = state;
                state.toDoList = toDoList.filter((item) =>
                item.id !== action.payload.id);
            },
            editTodo: (state,action) => {
                let {todoList} = state;
                state.toDoList = toDoList.map((item) => item.id === action.payload.id ? action.payload : item);
            }
        },
})

export const { addToDo, deleteToDo, editTodo } = toDoSlider.actions
export default toDoSlider.reducer;