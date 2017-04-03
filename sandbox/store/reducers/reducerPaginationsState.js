import { constants } from './../../constants/constants.js';

let initialState = { activePage: 1};

const nextPage = state => ({...state, activePage: (state.activePage + 1)});

const prevPage = state => ({...state, activePage: (state.activePage - 1)});

const paginationsState = (state = initialState, action) =>{
    switch (action.type) {
        case constants.NEXT_PAGINATION_PAGE:
            return nextPage(state);
        case constants.PREV_PAGINATION_PAGE:
            return prevPage(state);
        default:
            return state;
    }
};

export { paginationsState };