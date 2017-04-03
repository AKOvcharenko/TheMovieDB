import { constants } from './../constants/constants.js';
import 'whatwg-fetch';

const { API_BASE_URL, KEY, LANG} = constants;

const getPersons = page => {
    let url = `${API_BASE_URL}person/popular?api_key=${KEY}&language=${LANG}&page=${page}`;
    return fetch(url).then(response=>response.json());
};

export { getPersons };