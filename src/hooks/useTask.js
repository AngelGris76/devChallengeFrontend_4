import { useEffect, useReducer } from 'react';
import { loadTask } from '../actionsBuilders/taskActionBuilder';
import FILTER from '../constants/filter';
import taskReducer from '../reducers/taskReducer';

const useTask = (activePage) => {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const allTask = getAllTask();
    taskDispatch(loadTask(allTask));
  }, []);

  const filteredTasks = filterTasks(tasks, activePage);

  return {
    tasks: filteredTasks,
    taskDispatch,
  };
};

const getAllTask = () => {
  const foundTasks = [];
  const totalTasks = window.localStorage.length;

  for (let index = 0; index < totalTasks; index++) {
    const taskID = window.localStorage.key(index);
    const data = window.localStorage.getItem(taskID);

    foundTasks.unshift({ id: taskID, ...JSON.parse(data) });
  }

  foundTasks.sort((a, b) => a.id - b.id);

  return foundTasks;
};

const filterTasks = (tasks, filter) => {
  if (!tasks) return [];

  if (filter === FILTER.all) return [...tasks];

  if (filter === FILTER.active) return tasks.filter((task) => !task.completed);

  return tasks.filter((task) => task.completed);
};

export default useTask;
