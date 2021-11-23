import {
    UPDATE_CURRENT_DRINKS_LIST,
    SET_SEARCH_LIST,
    GET_GIN_DRINKS,
    GET_RUM_DRINKS,
    GET_TEQUILA_DRINKS,
    GET_VODKA_DRINKS,
    GET_DRINKS_ERROR,
    SET_SELECTED_DRINK,
    SET_SELECTED_DRINK_ERROR,
    SET_LOADING,
    SET_SELECTED_TAB,
} from '../actions/types';

const intialState = {
    drinksList: null,
    searchList: null,
    ginList: null,
    rumList: null,
    tequilaList: null,
    vodkaList: null,
    selectedTab: true,
    selectedDrink: {
        drinkInfo: null,
        recipe: null
    },
    loading: false,
    error: null
};

const Action = (state = intialState, action) => {
    switch (action.type) {
        case SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: true,
                loading: false
            }
        case UPDATE_CURRENT_DRINKS_LIST:
            return {
                ...state,
                drinksList: action.payload,
                loading: false
            }
        case SET_SEARCH_LIST:
            return {
                ...state,
                searchList: action.payload,
                selectedTab: false,
                loading: false
            }
        case GET_GIN_DRINKS:
            return {
                ...state,
                ginList: action.payload,
                drinksList: action.payload,
                searchList: action.payload,
                loading: false
            };
        case GET_RUM_DRINKS:
            return {
                ...state,
                rumList: action.payload,
                loading: false
            };
        case GET_TEQUILA_DRINKS:
            return {
                ...state,
                tequilaList: action.payload,
                loading: false
            };
        case GET_VODKA_DRINKS:
            return {
                ...state,
                vodkaList: action.payload,
                loading: false
            };
        case SET_SELECTED_DRINK:
            return {
                ...state,
                selectedDrink: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_DRINKS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            };
        case SET_SELECTED_DRINK_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Action;