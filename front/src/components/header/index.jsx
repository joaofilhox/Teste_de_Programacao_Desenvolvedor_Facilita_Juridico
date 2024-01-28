import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Facilita Jurídico</div>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Lista de Clientes
            </Link>
          </li>
          <li>
            <Link to="/register" onClick={toggleMenu}>
              Cadastrar Cliente
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;