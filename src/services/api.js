import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjkwMmFkNGI1ZjJkN2UzMWZjNmYzZGM5MzNhZjUxMSIsIm5iZiI6MTczMjI4MDgwMS4xNjk3ODI5LCJzdWIiOiI2NzQwN2QxZThiNGU0YzJlZjZmNzhjMTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.thO482B2xI4gc4q3PkRJGj8oFYlvcmBJ1JIhCume2Xg";

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return data.results;
};

export const fetchMovieCredits = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};
