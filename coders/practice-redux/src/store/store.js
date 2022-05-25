import { todoReducer } from './reducers/';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducers = {
    todos: todoReducer.reducer,
};
const rootReducer = combineReducers(reducers);

export const store = configureStore({
    reducer: rootReducer,
});
