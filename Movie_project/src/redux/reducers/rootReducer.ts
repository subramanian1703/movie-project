import { combineReducers } from "@reduxjs/toolkit";
import moviesListReducer from "./moviesListReducer";
import { Api } from "../../api/api";

const rootReducer = combineReducers({
    movies:moviesListReducer,
    [Api.reducerPath] : Api.reducer
})
export default rootReducer