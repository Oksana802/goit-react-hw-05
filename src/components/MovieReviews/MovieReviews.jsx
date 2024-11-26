import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import toast from "react-hot-toast";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        toast.error("Oops, something went wrong!", error);
      }
    };

    getData();
  }, [movieId]);

  if (!reviews.length) return <p className={s.text}>No reviews available.</p>;

  return (
    <ul className={s.box}>
      {reviews.map(({ id, author, content }) => (
        <li className={s.post} key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
