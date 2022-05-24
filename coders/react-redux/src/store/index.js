import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// const addTodo = createAction('ADD_TODO');
// const deleteTodo = createAction('DELETE_TODO');

// const reducer = createReducer([], {
//     [addTodo]: (state, action) => [{ text: action.payload.text, id: action.payload.id }, ...state],
//     [deleteTodo]: (state, action) => state.filter(todo => todo.id !== action.payload), //return new state
// });

const toDos = createSlice({
    name: 'todosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => [
            {
                text: action.payload.text,
                id: action.payload.id,
            },
            ...state,
        ],
        remove: (state, action) => state.filter(todo => todo.id !== action.payload),
    },
});

// const store = configureStore({ reducer });
// export const actionCreateors = {
//     addTodo,
//     deleteTodo,
// };
export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
