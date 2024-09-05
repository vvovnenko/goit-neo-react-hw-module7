import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice.js";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, `Too short!`)
    .max(50, `Too Long!`)
    .required("Required!"),
  number: Yup.string()
    .min(3, `Too short!`)
    .max(50, `Too Long!`)
    .required("Required!"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formInputWrapper}>
            <label className={css.formInputLabel} htmlFor={nameId}>
              Name
            </label>
            <Field
              className={css.formInput}
              type="text"
              name="name"
              id={nameId}
            />
            <ErrorMessage
              className={css.formInputError}
              name="name"
              component="div"
            />
          </div>

          <div className={css.formInputWrapper}>
            <label className={css.formInputLabel} htmlFor={numberId}>
              Number
            </label>
            <Field
              className={css.formInput}
              type="tel"
              inputMode="tel"
              name="number"
              id={numberId}
            />
            <ErrorMessage
              className={css.formInputError}
              name="number"
              component="div"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
