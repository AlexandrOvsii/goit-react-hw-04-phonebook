import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import shortid from 'shortid';

const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

export const ContactForm = ({ contacts, onAddContact }) => {
  function onFormSubmit(values, actions) {
    actions.resetForm();
    const contact = {
      id: shortid.generate(),
      name: values.name,
      number: values.number,
    };
    onAddContact(contact);
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <Form
        className={css.ContactsWrapper}
        // contacts={contacts}
      >
        <label htmlFor="name" className={css.Label}>
          Name
          <Field id="name" type="text" name="name" required />
        </label>

        <label htmlFor="tel" className={css.Label}>
          Number
          <Field id="tel" type="tel" name="number" required />
          <ErrorMessage name="number" />
        </label>
        <button className={css.Btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
