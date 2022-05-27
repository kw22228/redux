import { createStore, actionCreator } from './store/redux';
import { countReducer } from './store/reducer/countReducer';
import { Actions } from './store/actions';

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(Actions.countIncrease({ count: 5 }));
store.dispatch(Actions.countDecrease({ count: 2 }));

store.dispatch(Actions.countReset());
store.dispatch(Actions.countIncrease());
