import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTMyZDZjMzVhMGUyMDkxZDYzMjU1NWQ2ZWQwNGI4ZSIsInN1YiI6IjY0ZGJhMzdkMzcxMDk3MDBjNTFjYmRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MVvekMceKBksu68Sug4Uw4uYIVtrGnRKwgpg97ncRvg'

const baseQuery = fetchBaseQuery({ 
    baseUrl: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    prepareHeaders(headers) {
        headers.set("Content-Type", "application/json");
        headers.set("Authorization",`Bearer ${token}`)
        console.log('headers',headers);
        
        return headers
    },
})
export const Api = createApi({
  reducerPath: 'MoviesAPI',
  baseQuery,
  endpoints: () => ({ }),
})