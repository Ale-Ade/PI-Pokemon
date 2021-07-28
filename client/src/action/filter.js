import axios from 'axios';
import {
    FILTER_BY_ORIGIN_API,
    FILTER_BY_ORIGIN_USER,
    FILTER_BY_TYPE,
    SERVER_URL,
    LIMIT,
} from './constant';

function filterByApi() {
    return async (dispatch) => {
        await axios
            .get(`${SERVER_URL}/pokemons?filter=byApi&limit=${LIMIT}`)
            .then((res) => res.data)
            .then((pokemons) => {
                dispatch({ type: FILTER_BY_ORIGIN_API, payload: pokemons });
            });
    };
}

function filterByUsers() {
    return async (dispatch) => {
        await axios
            .get(`${SERVER_URL}/pokemons?filter=byUsers`)
            .then((res) => res.data)
            .then((pokemons) => {
                dispatch({ type: FILTER_BY_ORIGIN_USER, payload: pokemons });
            });
    };
}

function filterByType(type) {
    return {
        type: FILTER_BY_TYPE,
        payload: type,
    };
}

export { filterByApi, filterByUsers, filterByType };
