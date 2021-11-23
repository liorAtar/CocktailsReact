import { combineReducers } from "redux";
import drinkReducer from "./drinkReducer";
import userReducer from "./userReducer";

export default combineReducers({
    drink: drinkReducer,
    user: userReducer
});