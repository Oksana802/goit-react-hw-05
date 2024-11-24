import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchSearchMovie } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/loader";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    document.title = "TV | Movies";

    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        const searchMovies = await fetchSearchMovie(query);
        setMovies(searchMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("query", newQuery);
    setSearchParams(newParams);
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
