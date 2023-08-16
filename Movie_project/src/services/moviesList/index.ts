import { Api } from "../../api/api";
import { TMovie } from "./@types";


export const moviesListService = Api.injectEndpoints({
    endpoints:(builder)=>({
        getMoviesLists : builder.query<TMovie[],{}>({
            query: () => ({
                 url: `/`,
            }),
        })
    })
})

export const {useGetMoviesListsQuery} = moviesListService