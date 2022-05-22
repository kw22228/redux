import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

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

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ text: action.text, id: action.id }, ...state];
        case DELETE_TODO:
            return state.filter(({ id }) => id !== action.id);
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
