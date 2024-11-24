import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

import s from "./App.module.css";
import Navigation from "./Navigation/Navigation";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";

const App = () => {
  return (
    <div>
      <Navigation />
      <div className={s.box}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
