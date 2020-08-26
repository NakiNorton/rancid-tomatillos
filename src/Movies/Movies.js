import React from 'react'
import Movie from '../Movie/Movie'
import '../Movies/Movies.css'
import { Link } from 'react-router-dom'

const Movies = ({error, movies, loggedIn, userRatings, updateCurrentMovie}) => {
  let movieList;

  if (!loggedIn) {
    movieList = movies.map(movie => {
        return <Link to={`/movies/${movie.id}`}>
          <Movie 
            id={movie.id}
            title={movie.title}
            averageRating={movie.average_rating}
            backdropPath={movie.backdrop_path}
            key={movie.id}
            />
        </Link>
    })
  } else {
    movieList = movies.map(movie => {
      const matchingRating = userRatings.find(rating => rating.movie_id === movie.id)
      return <Link to={`/movies/${movie.id}`}>
        <Movie  
          id={movie.id}
          title={movie.title}
          averageRating={movie.average_rating}
          backdropPath={movie.backdrop_path}
          rating={matchingRating}
          key={movie.id}
        />
      </Link>
    })
  }
 
  return (
    <main>
      {error &&
        <h3 className='error-msg'>{error}</h3>
      }
      <h2 className='all-movies-title'>Browse All Movies</h2>
      <section aria-label='all-movies' className='Movies'>
        {movieList}
      </section>
    </main>
  )
}

export default Movies 