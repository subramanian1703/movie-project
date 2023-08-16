import { TMovie } from '../../services/moviesList/@types';
import {Link} from "react-router-dom";
interface IMovieCard{
    movie:TMovie
}
const MovieCard = (props:IMovieCard) => {
    const {movie} = props;

  return (
    <Link className='bg-white h-96  rounded-lg overflow-hidden shadow-md' to={{pathname:`/movie/${movie.id}`}} state={movie}>
        <img src={ `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.backdrop_path}`} alt='' className='w-full h-3/4 object-cover' />
        <div className='h-1/4 p-2 flex flex-col gap-1'>
            <div className='flex justify-between'>
                <h5 className='max-w-[50%] text-ellipsis overflow-hidden whitespace-nowrap'>{movie?.title}</h5>
                <span className='text-[primary] opacity-60'>({movie?.vote_average})</span>
            </div>
            <p className='overflow-hidden text-ellipsis break-words line-clamp-2'>{movie?.overview}</p>
        </div>
    </Link> 
  )
}

export default MovieCard
