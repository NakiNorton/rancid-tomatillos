import React from 'react';
import Movies from './Movies.js';
import { screen, fireEvent, render, } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Movies Component', () => {
  it('should have the correct content when rendered', () => {

    const movie1 = {
      id: 1,
      title: 'Cats',
      release_date:'2020-01-20',
      average_rating: 10,
      backdrop_path:'http://coolcats.com',
      poster_path:'http://coolcats-on-beach.com'
    }

    const movie2 = {
      id: 2,
      title: 'Dogs',
      release_date: '2020-02-20',
      average_rating: 10,
      backdrop_path: 'http://coolDogs.com',
      poster_path: 'http://coolDog-on-beach.com'
    }

    const rating1 = {
      id: 15,
      user_id: 1,
      movie_id: 413,
      rating: 10,
      created_at: '2020-08-17T23:48:55.695Z',
      updated_at: '2020-08-17T23:48:55.695Z'
    }

    const rating2 = {
      id: 20,
      user_id: 2,
      movie_id: 750,
      rating: 1,
      created_at: '2020-08-10T23:48:55.695Z',
      updated_at: '2020-08-10T23:48:55.695Z'
    }

    render(
      <BrowserRouter>
        <Movies 
          error=''
          movies={[movie1, movie2]}
          loggedIn={false}
          userRatings={[rating1, rating2]}
          analyzeMovieClick={jest.fn()}
          favorites={[]}
          home={true}
        />
      </BrowserRouter>
    )

    const moviesSection = screen.getByLabelText('all-movies');
    expect(moviesSection).toBeInTheDocument();
  });

  it('should render an h2 with the text Browse All Movies when on the homepage', () => {

    const movie1 = {
      id: 1,
      title: 'Cats',
      release_date: '2020-01-20',
      average_rating: 10,
      backdrop_path: 'http://coolcats.com',
      poster_path: 'http://coolcats-on-beach.com'
    }

    const movie2 = {
      id: 2,
      title: 'Dogs',
      release_date: '2020-02-20',
      average_rating: 10,
      backdrop_path: 'http://coolDogs.com',
      poster_path: 'http://coolDog-on-beach.com'
    }

    const rating1 = {
      id: 15,
      user_id: 1,
      movie_id: 413,
      rating: 10,
      created_at: '2020-08-17T23:48:55.695Z',
      updated_at: '2020-08-17T23:48:55.695Z'
    }

    const rating2 = {
      id: 20,
      user_id: 2,
      movie_id: 750,
      rating: 1,
      created_at: '2020-08-10T23:48:55.695Z',
      updated_at: '2020-08-10T23:48:55.695Z'
    }

    render(
      <BrowserRouter>
        <Movies
          error=''
          movies={[movie1, movie2]}
          loggedIn={false}
          userRatings={[rating1, rating2]}
          analyzeMovieClick={jest.fn()}
          favorites={[]}
          home={true}
        />
      </BrowserRouter>
    )
    
    const allMoviesTitle = screen.getByRole('heading', {name: 'Browse All Movies'});
    
    expect(allMoviesTitle).toBeInTheDocument();
  });

  it('should render an h2 with the text Your Favorite Movies when on the favorites page', () => {

    const movie1 = {
      id: 1,
      title: 'Cats',
      release_date: '2020-01-20',
      average_rating: 10,
      backdrop_path: 'http://coolcats.com',
      poster_path: 'http://coolcats-on-beach.com'
    }

    const movie2 = {
      id: 2,
      title: 'Dogs',
      release_date: '2020-02-20',
      average_rating: 10,
      backdrop_path: 'http://coolDogs.com',
      poster_path: 'http://coolDog-on-beach.com'
    }

    const rating1 = {
      id: 15,
      user_id: 1,
      movie_id: 413,
      rating: 10,
      created_at: '2020-08-17T23:48:55.695Z',
      updated_at: '2020-08-17T23:48:55.695Z'
    }

    const rating2 = {
      id: 20,
      user_id: 2,
      movie_id: 750,
      rating: 1,
      created_at: '2020-08-10T23:48:55.695Z',
      updated_at: '2020-08-10T23:48:55.695Z'
    }

    render(
      <BrowserRouter>
        <Movies
          error=''
          movies={[movie1, movie2]}
          loggedIn={true}
          userRatings={[rating1, rating2]}
          analyzeMovieClick={jest.fn()}
          favorites={[]}
          home={false}
        />
      </BrowserRouter>
    )

    const favoritesTitle = screen.getByRole('heading', { name: 'Your Favorite Movies' });

    expect(favoritesTitle).toBeInTheDocument();
  });

  it('should render the correct number of movie cards based on how many movies are passed in', () => {

    const movie1 = {
      id: 1,
      title: 'Cats',
      release_date: '2020-01-20',
      average_rating: 10,
      backdrop_path: 'http://coolcats.com',
      poster_path: 'http://coolcats-on-beach.com'
    }

    const movie2 = {
      id: 2,
      title: 'Dogs',
      release_date: '2020-02-20',
      average_rating: 9,
      backdrop_path: 'http://coolDogs.com',
      poster_path: 'http://coolDog-on-beach.com'
    }

    const rating1 = {
      id: 15,
      user_id: 1,
      movie_id: 413,
      rating: 10,
      created_at: '2020-08-17T23:48:55.695Z',
      updated_at: '2020-08-17T23:48:55.695Z'
    }

    const rating2 = {
      id: 20,
      user_id: 2,
      movie_id: 750,
      rating: 1,
      created_at: '2020-08-10T23:48:55.695Z',
      updated_at: '2020-08-10T23:48:55.695Z'
    }

    render(
      <BrowserRouter>
        <Movies
          error=''
          movies={[movie1, movie2]}
          loggedIn={false}
          userRatings={[rating1, rating2]}
          analyzeMovieClick={jest.fn()}
          favorites={[]}
          home={true}
        />
      </BrowserRouter>
    )

    const movieRating1 = screen.getByText('10 / 10');
    const movieRating2 = screen.getByText('9 / 10');
  
    expect(movieRating1).toBeInTheDocument();
    expect(movieRating2).toBeInTheDocument(); 
  
  });

  it('should call analyzeMovieClick when movie card is clicked', () => {
    
    const movie1 = {
      id: 1,
      title: 'Cats',
      release_date: '2020-01-20',
      average_rating: 10,
      backdrop_path: 'http://coolcats.com',
      poster_path: 'http://coolcats-on-beach.com'
    }

    const movie2 = {
      id: 2,
      title: 'Dogs',
      release_date: '2020-02-20',
      average_rating: 9,
      backdrop_path: 'http://coolDogs.com',
      poster_path: 'http://coolDog-on-beach.com'
    }

    const rating1 = {
      id: 15,
      user_id: 1,
      movie_id: 413,
      rating: 10,
      created_at: '2020-08-17T23:48:55.695Z',
      updated_at: '2020-08-17T23:48:55.695Z'
    }

    const rating2 = {
      id: 20,
      user_id: 2,
      movie_id: 750,
      rating: 1,
      created_at: '2020-08-10T23:48:55.695Z',
      updated_at: '2020-08-10T23:48:55.695Z'
    }

    const mockAnalyzeMovieClick = jest.fn(); 

    render(
      <BrowserRouter>
        <Movies
          error=''
          movies={[movie1, movie2]}
          loggedIn={false}
          userRatings={[rating1, rating2]}
          analyzeMovieClick={mockAnalyzeMovieClick}
          favorites={[]}
          home={false}
        />
      </BrowserRouter>
    )

    const moviesSection = screen.getByLabelText('all-movies');

    fireEvent.click(moviesSection);
   
    expect(mockAnalyzeMovieClick).toBeCalledTimes(1);
  })
})