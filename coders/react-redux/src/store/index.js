import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
    name: 'todosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            return [
                {
                    text: action.payload.text,
                    id: action.payload.id,
                },
                ...state,
            ];
        },
        remove: (state, action) => state.filter(todo => todo.id !== action.payload.id),
    },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
