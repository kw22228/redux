export const logger = store => next => action => {
    const currentState = store.getState();

    //groupCollapsed를 쓰면 아래 log들을 접어준다.
    console.groupCollapsed('Action logger => ', action.type);
    console.log('Current state: ', currentState);
    console.log('Action payload ', action.payload);
    console.groupEnd();

    next(action);
};
