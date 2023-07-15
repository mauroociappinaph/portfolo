import React from 'react';
import { useFormik } from 'formik';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import styles from './Form.module.css'; // Reemplaza "Form" con el nombre de tu componente

const Form = () => {
  // Resto del código del componente...

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Form</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Form;
