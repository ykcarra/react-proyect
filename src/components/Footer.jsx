import styles from './Footer.module.css';

const Footer = () => {
  
  const anio = new Date().getFullYear();

  return (
    <footer className={styles.footer}>

      <ul className={styles.footerNav}>
        <li>
          <a href="#" className={styles.footerLink}>Acerca de Nosotros</a>
        </li>
        <li>
          <a href="#" className={styles.footerLink}>Nuestras Redes</a>
        </li>
        <li>
          <a href="#" className={styles.footerLink}>Contacto</a>
        </li>
      </ul>
      <p className={styles.copyright}>
        © {anio} MerK2Libr$. Hecho con ❤️
      </p>
    </footer>
  );
}

export default Footer;