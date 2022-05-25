import { createStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addTodo = createAction('ADD_TODO');
const deleteTodo = createAction('DELETE_TODO');

const reducer = createReducer([], {
    [addTodo]: (state, action) => [{ text: action.payload.text, id: action.payload.id }, ...state],
    [deleteTodo]: (state, action) => state.filter(todo => todo.id !== action.payload), //return new state
});

const store = createStore(reducer);
export const actionCreateors = {
    addTodo,
    deleteTodo,
};

export default store;
