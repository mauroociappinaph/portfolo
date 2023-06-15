import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/projects" className={styles.link}>Projects</Link>
        </li>
        <li>
          <Link to="/skills" className={styles.link}>Skills</Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>About</Link>
        </li>
        <li>
          <Link to="/form" className={styles.link}>Form</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
