import NavBar from './NavBar';
import CartIcon from '../assets/CartIcon';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.logo}>       
          MerK2 libr$        
      </div>

      <div className={styles.navbarContainer}>
        <NavBar/>
      </div>

      <div className={styles.iconsContainer}>

        <div className={styles.iconoDeCarrito}>
          <CartIcon className={styles.icono}/>
          
        </div>
      </div>
    </header>   
  );
};

export default Header;
