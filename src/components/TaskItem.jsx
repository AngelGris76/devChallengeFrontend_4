import { changeTaskStatus } from '../actionsBuilders/taskActionBuilder';
import editItem from '../functions/editItem';
import useItem from '../hooks/useItem';
import CheckIcon from './icons/CheckIcon';

import style from './TaskItem.module.css';

const TaskItem = ({ item, taskDispatch }) => {
  const { completed, completeTask, uncompleteTask } = useItem(item.completed);

  const complete = completed ? style.complete : '';
  const checked = completed ? style.checked : '';

  return (
    <div className={style.item}>
      <label className={`${style.checkBox} ${checked}`}>
        {completed && <CheckIcon width='100%' />}
        <input
          className={style.input}
          type='checkbox'
          checked={completed}
          onChange={(ev) =>
            handleChange(
              ev,
              item.id,
              item.value,
              completeTask,
              uncompleteTask,
              taskDispatch
            )
          }
        />
      </label>
      <p className={complete}>{item.value}</p>
    </div>
  );
};

const handleChange = (
  ev,
  id,
  value,
  completeTask,
  uncompleteTask,
  taskDispatch
) => {
  const newStatus = ev.target.checked;

  if (newStatus) {
    completeTask();
  } else {
    uncompleteTask();
  }

  taskDispatch(changeTaskStatus(id));

  const newValue = { value, completed: newStatus };

  editItem(id, newValue);
};

export default TaskItem;
