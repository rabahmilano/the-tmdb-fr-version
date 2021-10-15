const API_ENDPOINT = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "original";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = "w780";

export { API_ENDPOINT, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE };
