import { NavLink } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => (
  <ul>
    {movies.map((movie) => (
      <li key={movie.id}>
        <NavLink className={s.link} to={`/movies/${movie.id.toString()}`}>
          {movie.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default MovieList;
