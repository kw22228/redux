import { createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('ADD_TODO');
const deleteTodo = createAction('DELETE_TODO');

const reducer = (state = [], action) => {
    switch (action.type) {
        case addTodo.type:
            const addState = [{ text: action.payload.text, id: action.payload.id }, ...state];

            return addState;
        case deleteTodo.type:
            const deleteState = state.filter(({ id }) => id !== action.payload);

            return deleteState;
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreateors = {
    addTodo,
    deleteTodo,
};

export default store;
