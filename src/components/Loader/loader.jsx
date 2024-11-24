import s from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={s.box}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#CC1212"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
