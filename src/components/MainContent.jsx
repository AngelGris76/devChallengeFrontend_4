import ACTIVE_PAGE from '../constants/activePage';
import useTask from '../hooks/useTask';
import TaskForm from './forms/TaskForm';
import TaskItem from './TaskItem';
import Button from './buttons/Button';
import TrashIcon from './icons/TrashIcon';
import style from './MainContent.module.css';

const MainContent = ({ activePage }) => {
  const { tasks, concatTask, changeTaskStatus, deleteTask, deleteAllTask } =
    useTask(activePage);

  const renderedTask = getItemsToRender(
    tasks,
    activePage,
    changeTaskStatus,
    deleteTask,
    deleteAllTask
  );

  const extraText = getExtraText(activePage);

  return (
    <main className={style.main}>
      {activePage !== ACTIVE_PAGE.completed && (
        <TaskForm concatTask={concatTask} />
      )}

      {!!renderedTask.length && (
        <div className={style.pageContainer}>
          <ul className={style.taskList}>{renderedTask}</ul>
          {activePage === ACTIVE_PAGE.completed && (
            <Button
              kind='secondary'
              size='sm'
              onClick={() => handleDeleteAll(tasks, deleteAllTask)}
            >
              <TrashIcon width='1rem' />
              delete all
            </Button>
          )}
        </div>
      )}

      {!renderedTask.length && <p>No hay tareas {extraText}</p>}
    </main>
  );
};

const handleDeleteAll = (tasks, deleteAllTask) => {
  for (const task of tasks) {
    window.localStorage.removeItem(task.id);
  }
  deleteAllTask();
};

const getItemsToRender = (tasks, activePage, changeTaskStatus, deleteTask) => {
  return tasks.map((task) => (
    <li className={style.taskItem} key={task.id}>
      <TaskItem item={task} changeTaskStatus={changeTaskStatus} />
      {activePage === ACTIVE_PAGE.completed && (
        <Button
          kind='icon'
          onClick={() => {
            deleteTask(task.id);
            window.localStorage.removeItem(task.id);
          }}
        >
          <TrashIcon width='1rem' />
        </Button>
      )}
    </li>
  ));
};

const getExtraText = (activePage) => {
  if (activePage === ACTIVE_PAGE.all) return null;
  if (activePage === ACTIVE_PAGE.active) return 'pendientes';
  return 'completadas';
};

export default MainContent;
