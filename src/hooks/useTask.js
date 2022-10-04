import { useEffect, useState } from 'react';
import FILTER from '../constants/filter';

const useTask = (activePage) => {
  const [tasks, setTasks] = useState([]);

  const concatTask = (newTask) => {
    setTasks([...tasks].concat(newTask));
  };

  const deleteTask = (taskID) => {
    setTasks(tasks.filter(({ id }) => id !== taskID));
  };

  const deleteAllTask = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  const changeTaskStatus = (taskID, newStatus) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskID);
    const changedTask = { ...tasks[taskIndex], completed: newStatus };
    const elementsBefore = tasks.slice(0, taskIndex);
    const elementsAfter = tasks.slice(taskIndex + 1);

    setTasks([...elementsBefore, changedTask, ...elementsAfter]);
  };

  useEffect(() => {
    const allTask = getAllTask();
    setTasks(allTask);
  }, []);

  const filteredTasks = filterTasks(tasks, activePage);

  return {
    tasks: filteredTasks,
    concatTask,
    deleteTask,
    deleteAllTask,
    changeTaskStatus,
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
