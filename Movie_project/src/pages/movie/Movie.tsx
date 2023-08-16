import Navbar from "../../components/common/Navbar/Navbar"
import MovieDetails from "../../components/movie/MovieDetails"

const Movie = () => {
  return (
    <section>
      <Navbar isMoviePage = {true} />  
      <MovieDetails /> 
    </section>
  )
}

export default Movie
