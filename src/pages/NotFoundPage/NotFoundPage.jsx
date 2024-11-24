import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";
const NotFoundPage = () => {
  return (
    <div className={s.box}>
      <p className={s.text}>Oops page not found</p>
      <Link className={s.link} to="/">
        go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
