import { useState , useEffect} from 'react'

import MovieList from "../component/MovieList"

function Home() {
  const [movies , setMovies] = useState([])

  const fetchMovies = async (query) => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=53dbc5d0&s=${query}`)
    const data = await res.json()
    console.log(data);
    setMovies(data.Search || [])
  }
  useEffect(() => {
      fetchMovies("Resident evil")
    },[])
  return (
    <div className="home">
        <form>
          <input className="searchInput" placeholder="Search for a movie..." />
          <button type="submit">Search 🔎</button>
        </form>
        <MovieList movies={movies} />
    </div>
  )
}

export default Home