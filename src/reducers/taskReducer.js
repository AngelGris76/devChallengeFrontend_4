import TASK_ACTIONS from '../constants/taskActions';

const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case TASK_ACTIONS.load:
      return [...payload];
    case TASK_ACTIONS.concat:
      return [...state].concat(payload);
    case TASK_ACTIONS.changeStatus:
      return [...state].map((item) => {
        if (item.id !== payload) return item;
        return { ...item, completed: !item.completed };
      });
    case TASK_ACTIONS.delete:
      return [...state].filter((item) => item.id !== payload);
    case TASK_ACTIONS.deleteAll:
      return [...state].filter((item) => item.completed === false);
    default:
      throw new Error('invalid action');
  }
};

export default taskReducer;
