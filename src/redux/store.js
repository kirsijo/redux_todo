import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './todoSlice';

export default configureStore({
 reducer: {
     toDo: toDoReducer
 },
})