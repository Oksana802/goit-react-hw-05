import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = { query: "" };

  const handleSubmit = (values, actions) => {
    if (!values.query.trim()) {
      toast("Please enter a search term");

      return;
    }
    onChangeQuery(values.query);
    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className={s.box}>
              <Field
                autoComplete="off"
                autoFocus
                placeholder="Search movie"
                name="query"
                className={s.field}
              />
              <button type="submit" className={s.btn}>
                Search
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
