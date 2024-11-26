import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../services/api";
import toast from "react-hot-toast";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const castData = await fetchMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        toast.error("Oops, something went wrong!", error);
      }
    };
    getData();
  }, [movieId]);
  if (!cast.length)
    return <p className={s.text}>No cast information available.</p>;
  return (
    <ul className={s.box}>
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id}>
          {(profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
          )) ?? <p className={s.photo}>no photo</p>}
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
