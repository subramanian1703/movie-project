import Navbar from '../../components/common/Navbar/Navbar';
import AllMovies from '../../components/moviesLists/AllMovies';
import {useState} from 'react'
const MoviesList = () => {
    const [searchText,setSearchText] = useState('')
  return (
    <section>
        <Navbar isMoviePage = {false} searchText={searchText} setSearchText={setSearchText} />
        <AllMovies searchText={searchText} />
    </section>
  )
}

export default MoviesList
