import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.box}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink
            className={s.link}
            to={`/movies/${movie.id.toString()}`}
            state={location}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
