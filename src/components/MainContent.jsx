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
  const { tasks, concatTask, changeTaskStatus, deleteTask, deleteAllTask } =
    useTask(filter);

  const extraText = ADITIONAL_TEXT[filter];

  return (
    <main className={style.main}>
      {filter !== FILTER.completed && <TaskForm concatTask={concatTask} />}
      {!tasks.length && <p>No {extraText} tasks</p>}
      <TaskList
        {...{ tasks, filter, changeTaskStatus, deleteTask, deleteAllTask }}
      />
    </main>
  );
};

export default MainContent;
