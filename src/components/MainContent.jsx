import ACTIVE_PAGE from '../constants/activePage';
import TaskForm from './forms/TaskForm';
import style from './MainContent.module.css';

const MainContent = ({ activePage }) => {
  return (
    <main className={style.main}>
      {activePage !== ACTIVE_PAGE.completed && <TaskForm />}
      <p>Lista de tareas</p>
    </main>
  );
};

export default MainContent;
