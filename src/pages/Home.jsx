import { useState, useEffect, useRef } from "react";
import MovieList from "../component/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const fetchMovies = async (query) => {
    setLoading(true);

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=53dbc5d0&s=${query}`
    );

    const data = await res.json();
    setMovies(data.Search || []);

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("Resident Evil");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = inputRef.current.value.trim();

    if (query) {
      fetchMovies(query);
    }
  };

  return (
    <div className="home">

      <div className="hero">
        <div className="hero-content">
          <h1>🎬 MovieVerse</h1>
          <p>
            Discover thousands of movies, TV shows and detailed information
            instantly.
          </p>
        </div>
      </div>

      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className="searchInput"
          placeholder="Search for a movie..."
        />

        <button type="submit">
          Search 🔎
        </button>
      </form>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <MovieList movies={movies} />
      )}

    </div>
  );
}

export default Home;