import editItem from '../functions/editItem';
import useItem from '../hooks/useItem';
import CheckIcon from './icons/CheckIcon';

import style from './TaskItem.module.css';

const TaskItem = ({ item, changeTaskStatus }) => {
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
              changeTaskStatus
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
  changeTaskStatus
) => {
  const newStatus = ev.target.checked;

  if (newStatus) {
    completeTask();
  } else {
    uncompleteTask();
  }

  changeTaskStatus(id, newStatus);

  const newValue = { value, completed: newStatus };

  editItem(id, newValue);
};

export default TaskItem;
