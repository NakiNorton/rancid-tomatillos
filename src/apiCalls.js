export async function getMovies() {
  const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
  const movies = await checkResponse(response); 
  return movies;
}

export async function checkLoginCredentials(loginInfo) {
  const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginInfo)
  });
  const validation = await checkResponse(response);
  return validation;
}

export async function fetchUserRatings(userId) {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`);
  const userRatings = await checkResponse(response);
  return userRatings; 
}

export async function postNewRating(userId, movieId, userRating) {
  const postResponse = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        movie_id: movieId,
        rating: parseInt(userRating)
      }
    )
  });
  const response = await checkResponse(postResponse);
  return response; 
}

export async function getFavoriteMovies() {
  const response = await fetch('http://localhost:3001/api/v1/favorites');
  const favoriteMovies = await checkResponse(response); 
  return favoriteMovies; 
}

export async function postFavoriteMovie(id) {
  const response = await fetch('http://localhost:3001/api/v1/favorites', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        id: id
      }
    )
  });
  const parsedResponse = await checkResponse(response);
  return parsedResponse; 
}

export async function deleteRating(userId, ratingId) {
  const deleteResponse = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings/${ratingId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  if (!deleteResponse.ok) {
    throw new Error(deleteResponse.statusText);
  } else {
    return 'Success';
  }
}

export async function getComments (movieId) {
  const response = await fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`);
  const comments = await checkResponse(response);
  return comments;
}

export async function postComment(movieId, author, comment) {
const response = await fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        author: author,
        comment: comment
      }
    )
  });
  const commentResponse = await checkResponse(response);
  return commentResponse; 
}

const checkResponse = async (response) => {
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error);
  } else {
    return response.json();
  }
}