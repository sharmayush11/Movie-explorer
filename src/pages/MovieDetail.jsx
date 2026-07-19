import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetail() {
  const { id } = useParams(); //param mtlb parameters
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=53dbc5d0&i=${id}`,
      );
      const data = await res.json();
      setMovie(data);
    }
    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
  <img src={movie.Poster} alt={movie.Title} />

  <div className="movie-info">
    <h2>{movie.Title}</h2>

    <p><strong>Genre:</strong> {movie.Genre}</p>
    <p><strong>Released:</strong> {movie.Released}</p>
    <p><strong>Actors:</strong> {movie.Actors}</p>
    <p><strong>Director:</strong> {movie.Director}</p>
    <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
    <p><strong>Plot:</strong> {movie.Plot}</p>
  </div>
</div>
  );
}

export default MovieDetail;
