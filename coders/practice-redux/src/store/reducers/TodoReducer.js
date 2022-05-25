import { createSlice } from '@reduxjs/toolkit';

const todoReducer = createSlice({
    name: 'todoReducer',
    initialState: [],
    reducers: {
        add: {
            reducer: (state, action) => {
                state.unshift(action.payload);
            },
            prepare: text => ({
                payload: {
                    id: Date.now(),
                    text,
                    done: false,
                },
            }),
        },
        remove: (state, action) => state.filter(todo => todo.id !== action.payload.id),
    },
});

export const { add, remove } = todoReducer.actions;
export default todoReducer;
