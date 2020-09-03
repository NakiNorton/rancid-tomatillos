import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import heartFavoriteFalse from '../images/tomatoOutline.png';
import heartFavoriteTrue from '../images/tomato.png';

const Movie = ({ id, title, averageRating, posterPath, rating, favorites, loggedIn, home }) => {
  const inFavorites = favorites.find(movieId => movieId === id);

  return (
    <>
      {home &&
        <section className='Movie' aria-label='movie-overview' style={{ backgroundImage: `url(${posterPath})` }} id={id} alt={title}>
          {inFavorites && loggedIn &&
            <img className='heart' src={heartFavoriteTrue} id={`heart${id}`} alt='favorited' onClick={(event) => {event.preventDefault()}}/>
          }
          {!inFavorites && loggedIn &&
            <img className='heart' src={heartFavoriteFalse} id={`heart${id}`} alt='not favorited' onClick={(event) => {event.preventDefault()}}/>
          }
          <p className='movie-rating'>{Math.round(averageRating * 10) / 10} / 10</p>
          {rating && 
            <p className='user-rating'>Your rating: {rating.rating} / 10</p>
          }
        </section>
      }
      {!home && 
        <section className='Movie' aria-label='movie-overview' style={{ backgroundImage: `url(${posterPath})` }} id={id} alt={title}>
          <img className='heart' src={heartFavoriteTrue} id={`heart${id}`} alt='favorited' onClick={(event) => {event.preventDefault()}}/>
          <p className='movie-rating'>{Math.round(averageRating * 10) / 10} / 10</p>
          {rating &&
            <p className='user-rating'>Your rating: {rating.rating} / 10</p>
          }
        </section>
      }
    </>
  )
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  averageRating: PropTypes.number,
  posterPath: PropTypes.string,
  rating: PropTypes.object,
  favorites: PropTypes.array,
  loggedIn: PropTypes.bool,
  home: PropTypes.bool
}

export default Movie