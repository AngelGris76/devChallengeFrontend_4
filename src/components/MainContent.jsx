import FILTER from '../constants/filter';
import useTask from '../hooks/useTask';
import TaskForm from './forms/TaskForm';
import TaskList from './TaskList';
import style from './MainContent.module.css';

const ADITIONAL_TEXT = {
  [FILTER.all]: '',
  [FILTER.active]: 'pending',
  [FILTER.completed]: 'completed',
};

const MainContent = ({ filter }) => {
  const { tasks, taskDispatch } = useTask(filter);

  const extraText = ADITIONAL_TEXT[filter];

  return (
    <main className={style.main}>
      {filter !== FILTER.completed && <TaskForm taskDispatch={taskDispatch} />}
      {!tasks.length && <p>No {extraText} tasks</p>}
      <TaskList {...{ tasks, filter, taskDispatch }} />
    </main>
  );
};

export default MainContent;
