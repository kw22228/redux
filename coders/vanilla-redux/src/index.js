import { createStore } from 'redux';
const nextTick = callback => {
    setTimeout(callback, 0);
};
////////////////////// count ////////////////////////

// const add = document.querySelector('#add');
// const minus = document.querySelector('#minus');
// const number = document.querySelector('span');

// // define
// const ADD = 'ADD';
// const MINUS = 'MINUS';

// const countModifier = (state = 0, action) => {
//     switch (action.type) {
//         case ADD:
//             return state + 1;
//         case MINUS:
//             return state - 1;
//         default:
//             return state;
//     }
// };
// const store = createStore(countModifier);
// store.subscribe(() => {
//     number.innerHTML = store.getState();
// });

// add.addEventListener('click', () => store.dispatch({ type: ADD }));
// minus.addEventListener('click', () => store.dispatch({ type: MINUS }));

//////////////////////////// todo List ////////////////////////
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ text: action.value, id: action.id }, ...state];
        case DELETE_TODO:
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};
const store = createStore(reducer);
const paintTodos = () => {
    ul.innerHTML = '';
    store.getState().map(({ text, id }) => {
        const li = document.createElement('li');
        const button = document.createElement('button');

        button.innerHTML = 'delete';
        button.addEventListener('click', e => {
            const id = parseInt(e.target.parentNode.id);

            store.dispatch({
                type: DELETE_TODO,
                id,
            });
        });
        li.innerHTML = text;
        li.id = id;

        li.appendChild(button);
        ul.appendChild(li);
    });
};
store.subscribe(paintTodos);

form.addEventListener('submit', e => {
    e.preventDefault();
    const todo = input.value;

    if (!todo) {
        return;
    }

    store.dispatch({
        type: ADD_TODO,
        value: todo,
        id: Date.now(),
    });

    input.value = '';
});
