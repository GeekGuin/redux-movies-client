import axios from 'axios';

export const FILTER_MOVIES = 'FILTER';
export const GET_MOVIES = 'GET';

const API_URI = 'http://localhost:8080'

export function filterMovies(data) {
  return {
    type: FILTER_MOVIES,
    payload: data
  }
}

export function promiseMovies() {
  return (async (dispatch, getState) => {
    try {
      const request = axios.get(`${API_URI}/movies`);
      const response = await request;
      dispatch(getMovies(response.data));
    } catch(e) {
      console.log('Error: ', e);
    }
  });
}

export function getMovies(data) {
  return {
    type: GET_MOVIES,
    payload: data
  }
}
