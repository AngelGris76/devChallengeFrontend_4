import { useState } from 'react';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';
import FILTER from './constants/filter';
import style from './App.module.css';

const App = () => {
  const [filter, setFilter] = useState(
    window.location.pathname.slice(1) || FILTER.all
  );

  return (
    <>
      <header>
        <h1 className={style.appTitle}>#todo</h1>
        <NavBar {...{ filter, setFilter }} />
      </header>
      <MainContent {...{ filter }} />
      <footer className={style.footer}>
        <p className={style.footerText}>Created by Sebastian Smuraglia</p>
      </footer>
    </>
  );
};

export default App;
