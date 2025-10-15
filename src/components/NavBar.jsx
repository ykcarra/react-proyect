import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

const NavBar = () => {
  return(
    <nav>
      <ul className={styles.lista}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>Inicio</Link>
          <Link to="/Ofertas" className={styles.link}>Ofertas</Link>
          <Link to="/SupermerK2" className={styles.link}>SupermerK2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;