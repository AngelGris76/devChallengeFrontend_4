import { useEffect } from 'react';
import FILTER from '../constants/filter';
import Link from './buttons/Link';
import style from './NavBar.module.css';

const activePageArray = Object.values(FILTER);

const NavBar = ({ filter, setFilter }) => {
  useEffect(() => {
    window.history.replaceState(null, '', filter);
  }, [filter]);

  const renderedButton = activePageArray.map((item) => (
    <li key={item} className={style.menuItem}>
      <Link
        href={item}
        aria-pressed={filter === item}
        onClick={() => setFilter(item)}
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
