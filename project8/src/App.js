import React, { useState } from 'react'
import { MoviesList } from './components/moviesList'
import './app.css'

export function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchMoviesHandler() {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://swapi.dev/api/films/')

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const data = await response.json()

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        }
      })

      setMovies(transformedMovies)
    } catch (error) {
      setError(error.message)
    }

    setIsLoading(false)
  }

  let context = <p>Found no movies</p>

  if (movies.length > 0) {
    context = <MoviesList movies={movies} />
  }

  if (error) {
    context = <p>{error}</p>
  }

  if (isLoading) {
    context = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>

      <section>
        {context}
      </section>
    </React.Fragment>
  )
}
