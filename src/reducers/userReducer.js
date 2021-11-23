import {
    SET_LOADING,
    UPDATE_CURRENT_USER,
    UPDATE_CURRENT_USER_ERROR,
    SIGN_UP,
    SIGN_UP_ERROR
} from '../actions/types';

const intialState = {
    currentUser: null,
    loadingUser: false,
    error: null
};

const Action = (state = intialState, action) => {
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
        case SIGN_UP:
            console.log('signed up')
            return {
                ...state,
                loadingUser: false
            }
        case SIGN_UP_ERROR:
            console.log(action.payload);
            return {
                ...state,
                loadingUser: false,
                error: action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loadingUser: true
            };
        default:
            return state;
    }
};

export default Action;