/* eslint-disable */
import {
    GET_ALL_POKEMONS,
    SET_PER_PAGE,
    GET_TYPES,
    GET_POKEMON_DETAILS,
    SET_PKMNS_STATS,
    FILTER_BY_ORIGIN_API,
    FILTER_BY_ORIGIN_USER,
    FILTER_BY_TYPE,
    LIMIT,
} from '../action/constant'; //Importo todas las acciones 

const initialState = {
    allPokemons: [],
    types: [],
    pokemonStats: [],
    pokemonDetails: {},
    pokemonsPerPage: LIMIT,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
            };
        case SET_PER_PAGE:
            return {
                ...state,
                pokemonsPerPage: action.payload,
            };
        case SET_PKMNS_STATS:
            const idExists = state.pokemonStats.find(
                (el) => el.id == action.payload.id
            );
            return {
                ...state,
                pokemonStats: !idExists
                    ? [...state.pokemonStats, action.payload]
                    : state.pokemonStats,
            };

        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            };

        case FILTER_BY_ORIGIN_API:
            return {
                ...state,
                allPokemons: action.payload,
            };

        case FILTER_BY_ORIGIN_USER:
            return {
                ...state,
                allPokemons: action.payload,
            };

        case FILTER_BY_TYPE:
            const typeAndId = state.pokemonStats.filter(
                (el) => el.types.includes(action.payload) && el.id
            );
            return {
                ...state,
                allPokemons: state.allPokemons.filter((pkmn) => {
                    return typeAndId.find((el) => el.id == pkmn.id);
                }),
            };

        case GET_POKEMON_DETAILS:
            return {
                ...state,
                pokemonDetails: action.payload,
            };

        default:
            return state;
    }
}

export default rootReducer;
