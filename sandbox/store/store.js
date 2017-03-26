import { navState } from './reducers/reducerNavState.js';
import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
    navState
});

const store = createStore(reducers);

export default store;