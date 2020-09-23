import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import favoriteIconFalse from '../images/yellowTomato.png';
import favoriteIconTrue
 from '../images/tomato.png';

const Movie = ({ id, title, averageRating, posterPath, rating, favorites, loggedIn, home }) => {
  const inFavorites = favorites.find(movieId => movieId === id);

  return (
    <>
      {home &&
        <>
          <section className='Movie' aria-label='movie-overview' style={{ backgroundImage: `url(${posterPath})` }} id={id} alt={title}>
          <p className='movie-rating'>{Math.round(averageRating * 10) / 10} / 10</p>
          </section>
          {loggedIn && 
            <section className='movie-card-info'>
              <img className='tomato' src={inFavorites ? favoriteIconTrue : favoriteIconFalse} id={`tomato${id}`} alt='favorited' onClick={(event) => { event.preventDefault() }} />
              <p className='user-rating'>{rating ? `Your rating: ${rating.rating} / 10` : "Add your rating"}</p>
            </section>
          }
        </>
      }
      {!home && 
        <section className='Movie' aria-label='movie-overview' style={{ backgroundImage: `url(${posterPath})` }} id={id} alt={title}>
          <img className='tomato' style={{ opacity: '0.9' }} src={favoriteIconTrue
          } id={`tomato${id}`} alt='favorited' onClick={(event) => {event.preventDefault()}}/>
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