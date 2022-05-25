import { TodoReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const reducers = {
    todos: TodoReducer,
};

export const store = configureStore({
    reducer: reducers,
});
