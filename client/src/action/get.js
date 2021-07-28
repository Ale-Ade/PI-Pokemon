import axios from 'axios';
import {
    GET_ALL_POKEMONS,
    GET_POKEMON_DETAILS,
    GET_TYPES,
    SERVER_URL,
    LIMIT,
} from './constant';

function getAllPokemons() {
    return async (dispatch) =>
        await axios
            .get(`${SERVER_URL}/pokemons?limit=${LIMIT}`)
            .then((res) => res.data)
            .then((pokemons) => {
                dispatch({ type: GET_ALL_POKEMONS, payload: pokemons });
            });
}

function getTypes() {
    return async (dispatch) =>
        await axios
            .get(`${SERVER_URL}/types`)
            .then((res) => res.data)
            .then((types) => {
                dispatch({ type: GET_TYPES, payload: types });
            });
}

function getPokemonDetails(id) {
    return async (dispatch) => {
        await axios
            .get(`${SERVER_URL}/pokemons/${id}`)
            .then((res) => res.data)
            .then((data) => {
                dispatch({ type: GET_POKEMON_DETAILS, payload: data });
            })
            .catch((err) => console.error(err));
    };
}

export { getAllPokemons, getTypes, getPokemonDetails };
