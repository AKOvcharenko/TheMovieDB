import { constants } from './../../constants/constants.js';

let initialState = { smaller: false};

const setNavState = (state, smaller) => ({...state, smaller});

const navState = (state=initialState, action) =>{
    switch (action.type) {
        case constants.SET_NAV_STATE:
            return setNavState(state, action.smaller);
        default:
            return state;
    }
};

export { navState };