export const actionCreator =
    type =>
    (payload = {}) => ({
        type,
        payload,
    });

export function createStore(reducer) {
    let state;
    let handlers = [];

    //state변경
    function dispatch(action) {
        state = reducer(state, action); //단방향 바인딩으로 인해 상태를 직접 return하면 안됨.. 때문에 worker를 통해 상태를 변경시킨다.
        handlers.forEach(handler => handler());
    }

    //state변경 감지
    function subscribe(handler) {
        handlers.push(handler);
    }

    //state value
    function getState() {
        return state;
    }
    return {
        dispatch,
        getState,
        subscribe,
    };
}
