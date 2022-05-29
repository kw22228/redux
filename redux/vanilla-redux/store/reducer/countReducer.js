import * as ActionType from '../action-type';

//state값 수정(mutate)
const initialState = { count: 1 };
export function countReducer(state = { ...initialState }, action) {
    const count = action.payload.count ? action.payload.count : 1;

    switch (action.type) {
        case ActionType.COUNT_INCREASE:
            return { ...state, count: state.count + count };
        case ActionType.COUNT_DECREASE:
            return { ...state, count: state.count - count };
        case ActionType.COUNT_RESET:
            //비동기 통신으로 인한 reset을 가정
            fetch('/reset')
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        return { ...initialState };
                    }
                });

        default:
            return { ...state };
    }
}
