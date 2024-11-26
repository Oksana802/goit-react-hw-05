import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/loader";
import { GoArrowLeft } from "react-icons/go";
import toast from "react-hot-toast";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    document.title = "TV | Movie Details";
    const getData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        toast.error("Oops, something went wrong!", error);
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
      <Link className={s.btn} to={goBackLink.current}>
        <GoArrowLeft />
        Go back
      </Link>

      <div className={s.box}>
        {poster_path ? (
          <img
            className={s.banner}
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
          />
        ) : (
          <p className={s.photo}>No poster</p>
        )}

        <div className={s.movie}>
          <h2>
            {title} ({new Date(release_date).getFullYear()})
          </h2>
          <p className={s.text}>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p className={s.text}>{overview}</p>
          <h3>Genres</h3>
          <p className={s.text}>
            {genres.map((genre) => genre.name).join(" ")}
          </p>
        </div>
      </div>
      <div className={s.info}>
        <h4 className={s.title}>Additional Information</h4>
        <ul className={s.list}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
