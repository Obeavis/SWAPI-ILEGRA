import { combineReducers } from "redux";
import allFilms from "./allFilms";
import film from "./film"

export default combineReducers({
    allFilms,
    film
});
