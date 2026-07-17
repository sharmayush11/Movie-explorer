// import { useState , useEffect , useRef } from 'react'

import MovieList from "../component/MovieList"

function Home() {
  return (
    <div className="home">
        <form>
          <input classNameName="searchInput" placeholder="Search for a movie..." />
          <button type="submit">Search 🔎</button>
        </form>
        <MovieList/>
    </div>
  )
}

export default Home