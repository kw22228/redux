import { createStore } from './store/redux.js';
import * as Actions from './store/actions/actions.js';
import reducer from './store/reducer/reducer.js';
import * as middlewares from './store/middlewares/index.js';
import { asyncJobs } from './store/job/asyncJobs.js';

const store = createStore(reducer, [middlewares.logger, middlewares.asyncRouter(asyncJobs)]);

const counterDisplay = document.querySelector('#counter');
const loadingMessage = document.querySelector('#loading');
const btnIncrease = document.querySelector('#btn-increase');
const btnAsyncIncrease = document.querySelector('#btn-async-increase');
const btnDecrease = document.querySelector('#btn-decrease');
const btnReset = document.querySelector('#btn-reset');

store.subscribe(function () {
    const { counter, request } = store.getState();

    loadingMessage.style.visibility = request ? 'visible' : 'hidden';
    counterDisplay.textContent = counter;
});

store.dispatch(Actions.setCounter(0));

btnReset.addEventListener('click', () => {
    store.dispatch(Actions.setCounter(0));
});

btnIncrease.addEventListener('click', () => {
    store.dispatch(Actions.increase());
});

btnAsyncIncrease.addEventListener('click', () => {
    store.dispatch(Actions.asyncIncrease({ url: '/async-increase' }));
});

btnDecrease.addEventListener('click', () => {
    store.dispatch(Actions.decrease());
});
