import useItem from '../hooks/useItem';
import CheckIcon from './icons/CheckIcon';

import style from './TaskItem.module.css';

const TaskItem = ({ item }) => {
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
          onChange={(ev) => {
            if (ev.target.checked) return completeTask();
            uncompleteTask();
          }}
        />
      </label>
      <p className={complete}>{item.value}</p>
    </div>
  );
};

export default TaskItem;
