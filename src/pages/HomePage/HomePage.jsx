import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";
import Loader from "../../components/Loader/loader";
// import { NavLink, Outlet } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "TV | HOME";

    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error(
          "Sorry, there was an error getting movie information:",
          error
        );
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
