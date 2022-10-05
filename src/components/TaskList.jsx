import {
  deleteAllTask,
  deleteTask,
} from '../actionsBuilders/taskActionBuilder';
import BUTTON_PROPERTIES from '../constants/buttonProperties';
import FILTER from '../constants/filter';
import Button from './buttons/Button';
import TrashIcon from './icons/TrashIcon';
import TaskItem from './TaskItem';
import style from './TaskList.module.css';

const TaskList = ({ tasks, filter, taskDispatch }) => {
  const renderedTask = getItemsToRender(tasks, filter, taskDispatch);

  return (
    <div className={style.pageContainer}>
      {renderedTask.length > 0 && (
        <ul className={style.taskList}>{renderedTask}</ul>
      )}
      {filter === FILTER.completed && (
        <Button
          kind={BUTTON_PROPERTIES.secondary}
          size={BUTTON_PROPERTIES.sm}
          onClick={() => handleDeleteAll(tasks, taskDispatch)}
          disabled={renderedTask.length === 0}
        >
          <TrashIcon width='1rem' />
          delete all
        </Button>
      )}
    </div>
  );
};

const getItemsToRender = (tasks, filter, taskDispatch) => {
  return tasks.map((task) => (
    <li className={style.taskItem} key={task.id}>
      <TaskItem item={task} taskDispatch={taskDispatch} />
      {filter === FILTER.completed && (
        <Button
          kind={BUTTON_PROPERTIES.icon}
          onClick={() => {
            taskDispatch(deleteTask(task.id));
            window.localStorage.removeItem(task.id);
          }}
        >
          <TrashIcon width='1rem' />
        </Button>
      )}
    </li>
  ));
};

const handleDeleteAll = (tasks, taskDispatch) => {
  for (const task of tasks) {
    window.localStorage.removeItem(task.id);
  }
  taskDispatch(deleteAllTask());
};

export default TaskList;
