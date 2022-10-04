import BUTTON_PROPERTIES from '../constants/buttonProperties';
import FILTER from '../constants/filter';
import Button from './buttons/Button';
import TrashIcon from './icons/TrashIcon';
import TaskItem from './TaskItem';
import style from './TaskList.module.css';

const ListTask = ({
  tasks,
  filter,
  changeTaskStatus,
  deleteTask,
  deleteAllTask,
}) => {
  const renderedTask = getItemsToRender(
    tasks,
    filter,
    changeTaskStatus,
    deleteTask,
    deleteAllTask
  );

  return (
    <div className={style.pageContainer}>
      {renderedTask.length > 0 && (
        <ul className={style.taskList}>{renderedTask}</ul>
      )}
      {filter === FILTER.completed && (
        <Button
          kind={BUTTON_PROPERTIES.secondary}
          size={BUTTON_PROPERTIES.sm}
          onClick={() => handleDeleteAll(tasks, deleteAllTask)}
          disabled={renderedTask.length === 0}
        >
          <TrashIcon width='1rem' />
          delete all
        </Button>
      )}
    </div>
  );
};

const getItemsToRender = (tasks, filter, changeTaskStatus, deleteTask) => {
  return tasks.map((task) => (
    <li className={style.taskItem} key={task.id}>
      <TaskItem item={task} changeTaskStatus={changeTaskStatus} />
      {filter === FILTER.completed && (
        <Button
          kind={BUTTON_PROPERTIES.icon}
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

const handleDeleteAll = (tasks, deleteAllTask) => {
  for (const task of tasks) {
    window.localStorage.removeItem(task.id);
  }
  deleteAllTask();
};

export default ListTask;
