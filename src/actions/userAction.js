import {
    SET_LOADING,
    UPDATE_CURRENT_USER,
    UPDATE_CURRENT_USER_ERROR
} from './types';

// Update the current user
export const updateCurrentUser = (user) => dispatch => {
    dispatch(setLoadingUser());

    try {
        dispatch({
            type: UPDATE_CURRENT_USER,
            payload: user
        });
    } catch (err) {
        dispatch({
            type: UPDATE_CURRENT_USER_ERROR,
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