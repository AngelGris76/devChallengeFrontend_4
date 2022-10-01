import { useEffect } from 'react';
import ACTIVE_PAGE from '../constants/activePage';
import Link from './buttons/Link';
import style from './NavBar.module.css';

const activePageArray = Object.values(ACTIVE_PAGE);

const NavBar = ({ activePage, setActivePage }) => {
  useEffect(() => {
    window.history.replaceState(null, '', activePage);
  }, [activePage]);

  const renderedButton = activePageArray.map((item) => (
    <li key={item} className={style.menuItem}>
      <Link
        href={item}
        aria-pressed={activePage === item}
        onClick={() => setActivePage(item)}
      >
        {item}
      </Link>
    </li>
  ));

  return (
    <nav className={style.navBar}>
      <ul className={style.menu}>{renderedButton}</ul>
    </nav>
  );
};

export default NavBar;
