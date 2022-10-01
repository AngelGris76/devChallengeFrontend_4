import { useState } from 'react';
import Button from '../buttons/Button';
import style from './TaskForm.module.css';

const TaskForm = () => {
  const [task, setTask] = useState('');
  return (
    <form
      className={style.form}
      onSubmit={(ev) => handleSubmit(ev, task, setTask)}
    >
      <input
        className={style.input}
        type='text'
        placeholder='add details'
        value={task}
        onChange={(ev) => setTask(ev.target.value)}
      />
      <Button type='submit' disabled={!task}>
        Add
      </Button>
    </form>
  );
};

const handleSubmit = (ev, task, setTask) => {
  ev.preventDefault();
  // TODO
  // set localStorage and task array

  const id = self.crypto.randomUUID();
  const data = JSON.stringify({ value: task, completed: false });

  window.localStorage.setItem(id, data);

  setTask('');
};

export default TaskForm;
