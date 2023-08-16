import { BrowserRouter,Routes,Route } from "react-router-dom"
import MoviesList from "./pages/moviesLists/MoviesList"
import Movie from "./pages/movie/Movie"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />}/>
        <Route path="/movie/:id" element={<Movie />}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
