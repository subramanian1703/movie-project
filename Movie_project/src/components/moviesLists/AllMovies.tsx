import { useAppSelector } from '../../redux/hooks/hooks';
import { useGetMoviesListsQuery } from '../../services/moviesList';
import MovieCard from './MovieCard';
interface IAllMovies {
  searchText:string
}
const AllMovies = (props:IAllMovies) => {
  const {searchText} = props
    const {isLoading,isError} = useGetMoviesListsQuery({});
    const {moviesList} = useAppSelector(store=>store.movies);

    if(isLoading){
      return (
        <h1>Loading...</h1>
      )
    }
    if(isError){
      return (
        <h1>Failed to fetch movies!</h1>
      )
    }
    
  return (
    <div className='px-4 py-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4'>
        {
          moviesList?.filter(m=>m.title.toLowerCase().includes(searchText.toLowerCase()))?.map(movie=>(
              <MovieCard key={movie.id} movie ={movie} />
          ))
        }             
    </div>
  )
}

export default AllMovies
