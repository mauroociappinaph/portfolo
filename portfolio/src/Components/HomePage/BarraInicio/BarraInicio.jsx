import { Link } from "react-router-dom";
import styles from './BarraInicio.module.css';

function BarraInicio() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.link} to="/projects">Projects</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to="/skills">Skills</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to="/about">About</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  );
}

export default BarraInicio;
