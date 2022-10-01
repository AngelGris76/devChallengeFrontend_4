import { useState } from 'react';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';
import ACTIVE_PAGE from './constants/activePage';
import style from './App.module.css';

const App = () => {
  const [activePage, setActivePage] = useState(
    window.location.pathname.slice(1) || ACTIVE_PAGE.all
  );

  return (
    <>
      <header>
        <h1 className={style.appTitle}>#todo</h1>
        <NavBar {...{ activePage, setActivePage }} />
      </header>
      <MainContent {...{ activePage }} />
      <footer className={style.footer}>
        <p className={style.footerText}>Created by Sebastian Smuraglia</p>
      </footer>
    </>
  );
};

export default App;
