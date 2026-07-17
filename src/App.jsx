import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <nav class="navbar">
		    <a class="logo" href="/" data-discover="true">
			    <h2>🎬 Movie Explorer</h2>
		    </a>
		    <a href="/" data-discover="true">Home</a>
	    </nav>
      <form>
			  <input class="searchInput" placeholder="Search for a movie..."/>
			  <button type="submit">Search 🔎</button>
		  </form>
      <div class="movie-list">
			  <div class="movie-card">
				  <img alt="The Avengers" src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg"/>
				  <h3>The Avengers</h3>
				  <p>2012</p>
				  <a href="movie-detail.html" data-discover="true">Details</a>
			  </div>
			  <div class="movie-card">
				  <img alt="The Avengers" src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg"/>
				  <h3>The Avengers</h3>
				  <p>2012</p>
				  <a href="movie-detail.html" data-discover="true">Details</a>
			  </div>
			  <div class="movie-card">
				  <img alt="The Avengers" src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg"/>
				  <h3>The Avengers</h3>
				  <p>2012</p>
				  <a href="movie-detail.html" data-discover="true">Details</a>
			  </div>
		  </div>
    </div>
  )
}

export default App