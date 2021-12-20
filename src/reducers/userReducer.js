import {
    SET_LOADING,
    UPDATE_CURRENT_USER,
    UPDATE_CURRENT_USER_ERROR,
    SET_LOGGED_IN
} from '../actions/types';

const intialState = {
    currentUser: null,
    loadingUser: false,
    isLoggedIn: false,
    error: null
};

const UserAction = (state = intialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                loadingUser: false
            }
        case UPDATE_CURRENT_USER_ERROR:
            return {
                ...state,
                loadingUser: false,
                error: action.payload
            }
        case SET_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loadingUser: true
            };
        default:
            return state;
    }
};

export default UserAction;