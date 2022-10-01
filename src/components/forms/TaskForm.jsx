import { useState } from 'react';
import createItem from '../../functions/createItem';
import Button from '../buttons/Button';
import style from './TaskForm.module.css';

const TaskForm = ({ concatTask }) => {
  const [value, setValue] = useState('');
  return (
    <form
      className={style.form}
      onSubmit={(ev) => handleSubmit(ev, value, setValue, concatTask)}
    >
      <input
        className={style.input}
        type='text'
        placeholder='add details'
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
      <Button type='submit' disabled={!value}>
        Add
      </Button>
    </form>
  );
};

const handleSubmit = (ev, value, setValue, concatTask) => {
  ev.preventDefault();

  const data = { value, completed: false };

  const createdTask = createItem(data);
  concatTask(createdTask);

  setValue('');
};

export default TaskForm;
