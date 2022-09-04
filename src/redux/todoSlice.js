import {createSlice} from '@reduxjs/toolkit';

const todoReducer = createSlice({
    name: "tasks",
    initialState:{
        taskList: [
            {id: 1, content:"Do grocery shopping"},
            {id: 2, content: 'Go for a run'}
        ]
        },
        reducers: {
            addTask: (state,action) => {
                let newtaskList = {
                    id: Math.random(),
                    content: action.payload.newContent
                }
                state.taskList.push(newtaskList);
            },
            deleteTodo: (state,action) => {
                let {taskList} = state;
                state.taskList = taskList.filter((item) =>
                item.id !== action.payload.id);
            },
            editTodo: (state,action) => {
                let {taskList} = state;
                state.taskList = taskList.map((item) => item.id === action.payload.id ? action.payload : item);
            }
        },
})

export const { addTask, deleteToDo, editTodo } = todoReducer.actions
export default todoReducer.reducer;