export const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjRiZWRkMWY3Mzk3ZDY3ZjNmOGJlODAxNjM5MDJiNiIsIm5iZiI6MTc1Nzg3Mzg5OC4wOTc5OTk4LCJzdWIiOiI2OGM3MDZlYWY0MjJhNGExM2ZlMmZmODEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.63CwpF_Cb-RteNqdunZCAX3F5bHcGf3RtwCNCa8lsFE'
  }
};
export const MOVIE_DETAILS = "'https://api.themoviedb.org/3/movie/'";
export const POPULAR_MOVIE_API = "https://api.themoviedb.org/3/movie/popular?&page=1"
export const TOP_RATED_MOVIE_API = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const UPCOMING_MOVIES_API = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const POSTER_IMAGE_API = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name:"Hindi"},
  {identifier: "spanish", name:"Spanish"},
];