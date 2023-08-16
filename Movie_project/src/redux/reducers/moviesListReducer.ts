import { createSlice } from "@reduxjs/toolkit";
import { moviesListService } from "../../services/moviesList";
import { TMovie } from "../../services/moviesList/@types";

const {getMoviesLists} = moviesListService.endpoints;

const initialState:{moviesList:TMovie[],singleMovie:{}} = {
    moviesList:[],
    singleMovie:{}
}
const moviesListReducer = createSlice({
    name:'movies',
    initialState,
    reducers:{
        setSingleMovie : (state,action)=>{
            state.singleMovie = action.payload
        }
    },
    extraReducers:builder=>{
        builder.addMatcher(getMoviesLists.matchFulfilled,(state,action:any)=>{
            state.moviesList = action.payload?.results
        })
    }
})

export default moviesListReducer.reducer