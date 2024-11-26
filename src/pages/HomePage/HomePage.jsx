import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../services/api";
import toast from "react-hot-toast";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = "TV | HOME";

    const getTrendingMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        toast.error(
          "Sorry, there was an error getting movie information:",
          error
        );
      }
    };
    getTrendingMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
