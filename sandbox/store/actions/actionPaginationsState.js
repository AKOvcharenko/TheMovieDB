import { constants } from './../../constants/constants.js';

const nextPage = () => ({type: constants.NEXT_PAGINATION_PAGE});

const prevPage = () => ({type: constants.PREV_PAGINATION_PAGE});

export { nextPage, prevPage };
