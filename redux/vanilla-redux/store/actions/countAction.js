import { actionCreator } from '../redux';
import * as Actions from '../action-type';

export const countIncrease = actionCreator(Actions.COUNT_INCREASE);

export const countDecrease = actionCreator(Actions.COUNT_DECREASE);

export const countReset = actionCreator(Actions.COUNT_RESET);
