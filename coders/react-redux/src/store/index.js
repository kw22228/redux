import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TODOS_KEY = 'todosList';

const addTodo = text => {
    return {
        type: ADD_TODO,
        text,
        id: Date.now(),
    };
};

const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id,
    };
};

const reducer = (
    state = localStorage.getItem(TODOS_KEY) ? JSON.parse(localStorage.getItem(TODOS_KEY)) : [],
    action
) => {
    switch (action.type) {
        case ADD_TODO:
            const addState = [{ text: action.text, id: action.id }, ...state];
            localStorage.setItem(TODOS_KEY, JSON.stringify(addState));

            return addState;
        case DELETE_TODO:
            const deleteState = state.filter(({ id }) => id !== action.id);
            localStorage.setItem(TODOS_KEY, JSON.stringify(deleteState));

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
