import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    games: [],
    nextPage: null,
    prevPage: null,
    isLoading: false,
}

const fetchGamesStart = (state,action) => {
    return updateObject(state, {
        isLoading: true
    });
} 
const fetchGamesSuccess = (state,action) => {
    return updateObject(state, {
        games: action.data.results,
        nextPage: action.data.next,
        prevPage: action.data.previous,
        isLoading: false,
        gameCount: action.data.count
    });
} 
const fetchGamesFail = (state,action) => {
    return updateObject(state, {
        isLoading: false,
    });
} 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FETCH_GAMES_START): return fetchGamesStart(state, action)
        case (actionTypes.FETCH_GAMES_SUCCESS): return fetchGamesSuccess(state, action)
        case (actionTypes.FETCH_GAMES_FAIL): return fetchGamesFail(state, action)
        default: return state;
    }
}

export default reducer;
