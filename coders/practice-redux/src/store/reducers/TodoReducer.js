import { createSlice } from '@reduxjs/toolkit';

const TodoReducer = createSlice({
    name: 'todosReducer',
    initialState: [],
    reducers: {
        add: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: ({ text }) => ({
                payload: {
                    id: Date.now(),
                    text,
                    done: false,
                },
            }),
        },
    },
});

export default TodoReducer;
export const { add } = TodoReducer.actions;
