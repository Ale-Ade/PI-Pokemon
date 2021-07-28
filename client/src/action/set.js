import { SET_PER_PAGE, SET_PKMNS_STATS } from './constant';

function setPkmnsPerPage(payload) {
    return {
        type: SET_PER_PAGE,
        payload,
    };
}

function setPkmnsStats(payload) {
    return {
        type: SET_PKMNS_STATS,
        payload,
    };
}

export { setPkmnsPerPage, setPkmnsStats };
