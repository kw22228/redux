import * as Actions from '../actions/actions.js';
import { ASYNC_INCREASE_COUNTER } from '../actions/action-type.js';

export const asyncJobs = {
    [ASYNC_INCREASE_COUNTER]: function (store, action) {
        store.dispatch(Actions.asyncRequest());
        setTimeout(() => {
            store.dispatch(Actions.increase(20));
            store.dispatch(Actions.asyncResponse());
        }, 3000);
    },
};
