import {  useParams } from 'react-router-dom'
import { useEffect , useState } from 'react'

function MovieDetail() {
    const { id } = useParams() //param mtlb parameters
    const [ movie , setMovie ] = useState()

    useEffect(() => {
        async function getMovie() {
            const res = await fetch(`https://www.omdbapi.com/?apikey=53dbc5d0&i=${id}`)
            const data = await res.json()
            setMovie(data)
        }
        getMovie();
    },[id])
  return (
    <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster}/>
		<p><strong>Genre:</strong> {movie.Type}</p>
		<p><strong>Released:</strong> {movie.Year}</p>
		<p><strong>Plot:</strong> The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.</p>
	</div>
  )
}

export default MovieDetail