import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";

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
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <Field
                // autoComplete="off"
                autoFocus
                placeholder="Search movie"
                name="query"
              />
              <button type="submit">Search</button>
            </div>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;
