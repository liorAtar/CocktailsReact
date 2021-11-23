import {
    SET_LOADING,
    UPDATE_CURRENT_USER,
    UPDATE_CURRENT_USER_ERROR,
    SIGN_UP,
    SIGN_UP_ERROR
} from './types';
import { signup } from '../firebase';

// Update the current user
export const updateCurrentUser = (user) => dispatch => {
    dispatch(setLoadingUser());

    try {
        dispatch({
            type: UPDATE_CURRENT_USER,
            payload: user
        })

    } catch (err) {
        dispatch({
            type: UPDATE_CURRENT_USER_ERROR,
            payload: err
        })
    }
};

// Sign up the user
export const signUp = (email, password) => async dispatch => {
    dispatch(setLoadingUser());

    try {
        await signup(email, password)

        dispatch({
            type: SIGN_UP,
        })

    } catch (err) {
        dispatch({
            type: SIGN_UP_ERROR,
            payload: err
        })
    }
};

// Set loading to true
export const setLoadingUser = () => {
    return {
        type: SET_LOADING
    };
};