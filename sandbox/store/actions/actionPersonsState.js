import { constants } from './../../constants/constants.js';

const changePersonsState = data => ({type: constants.CHANGE_PERSONS_STATE, data});

export { changePersonsState };