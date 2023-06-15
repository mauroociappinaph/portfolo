import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>Soy Footer</h1>
      <p className={styles.description}>¡Este es el pie de página de mi sitio web!</p>
    </footer>
  );
}

export default Footer;
