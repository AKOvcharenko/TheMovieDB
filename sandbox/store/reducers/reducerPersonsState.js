import { constants } from './../../constants/constants.js';

const changePersonsState = (state, data) => [...state].concat(data);

const personsState = (state = [], action) =>{
    switch (action.type) {
        case constants.CHANGE_PERSONS_STATE:
            return changePersonsState(state, action.data);
        default:
            return state;
    }
};

export { personsState };