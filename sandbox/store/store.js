import { navState } from './reducers/reducerNavState.js';
import { personsState } from './reducers/reducerPersonsState.js';
import { paginationsState } from './reducers/reducerPaginationsState';
import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
    navState,
    personsState,
    paginationsState
});

const store = createStore(reducers);

window.store = store;

export default store;