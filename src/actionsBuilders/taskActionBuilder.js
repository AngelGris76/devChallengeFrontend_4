import TASK_ACTIONS from '../constants/taskActions';

const loadTask = (taskList) => {
  return { type: TASK_ACTIONS.load, payload: taskList };
};

const concatTask = (newTask) => {
  return { type: TASK_ACTIONS.concat, payload: newTask };
};

const changeTaskStatus = (taskID) => {
  return { type: TASK_ACTIONS.changeStatus, payload: taskID };
};

const deleteTask = (taskID) => {
  return { type: TASK_ACTIONS.delete, payload: taskID };
};

const deleteAllTask = () => {
  return { type: TASK_ACTIONS.deleteAll };
};

export { loadTask, concatTask, changeTaskStatus, deleteTask, deleteAllTask };
