import ACTIVE_PAGE from '../constants/activePage';
import style from './MainContent.module.css';

const MainContent = ({ activePage }) => {
  return (
    <main className={style.main}>
      {activePage !== ACTIVE_PAGE.completed && <p>formulario</p>}
      <p>Lista de tareas</p>
    </main>
  );
};

export default MainContent;
