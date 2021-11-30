import {
    UPDATE_CURRENT_DRINKS_LIST,
    SET_SEARCH_LIST,
    GET_DRINKS_ERROR,
    SET_SELECTED_DRINK,
    SET_SELECTED_DRINK_ERROR,
    SET_LOADING,
    SET_SELECTED_TAB,
} from './types';
import axios from 'axios';

// Set the current drink list tp show
export const setDrinksList = (listToShow) => dispatch => {
    dispatch(setLoading());

    try {
        dispatch({
            type: UPDATE_CURRENT_DRINKS_LIST,
            payload: listToShow
        });
    } catch (err) {
        dispatch({
            type: GET_DRINKS_ERROR,
            payload: err
        })
    }
};

// Set the current drink list to serach in
export const setSearchList = (serachList) => dispatch => {
    try {
        dispatch(setDrinksList(serachList));

        dispatch({
            type: SET_SEARCH_LIST,
            payload: serachList
        });
    } catch (err) {
        dispatch({
            type: GET_DRINKS_ERROR,
            payload: err
        })
    }
};

// Get drinks from api by selected tab
export const getRequestedTabDrinks = (tabName, type) => async dispatch => {
    try {
        dispatch(setLoading());

        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${tabName}`);
        const data = res.data.drinks;

        dispatch({
            type: type,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: GET_DRINKS_ERROR,
            payload: err
        })
    }
};

// Set the selected drink
export const setSelectedDrink = (name) => async dispatch => {
    try {

        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const data = res.data.drinks[0];

        const ingredients = [];
        const measurements = [];
        const recipe = [];

        for (const [key, value] of Object.entries(data)) {
            if (key.includes("strIngredient") && value !== null) {
                ingredients.push(value);
            }
        }

        for (const [key, value] of Object.entries(data)) {
            if (key.includes("strMeasure") && value !== null) {
                measurements.push(value);
            }
        }

        for (let index = 0; index < ingredients.length; index++) {
            if (measurements[index] !== undefined) {
                recipe.push(measurements[index] + ' ' + ingredients[index]);
            } else {
                recipe.push(ingredients[index]);
            }
        }

        dispatch({
            type: SET_SELECTED_DRINK,
            payload: {
                drinkInfo: data,
                recipe: recipe
            }
        });
    } catch (err) {
        dispatch({
            type: SET_SELECTED_DRINK_ERROR,
            payload: err
        })
    }
};

// Set loading to true
export const setLoading = () => {
    console.log("entered")
    return {
        type: SET_LOADING
    };
};

export const setLogoClicked = () => {
    return {
        type: SET_SELECTED_TAB
    };
};