import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "TV | Movie Details";
    const getData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error(
          "Sorry, there was an error getting movie information:",
          error
        );
      }
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div className={s.box}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />
        <div>
          <h2>
            {title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map((genre) => genre.name).join(" ")}</p>
        </div>
      </div>
      <div className={s.info}>
        <h4>Additional Information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
