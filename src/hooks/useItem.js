import { useState } from 'react';

const useItem = (initialState) => {
  const [completed, setCompleted] = useState(initialState);

  const completeTask = () => setCompleted(true);
  const uncompleteTask = () => setCompleted(false);

  return { completed, completeTask, uncompleteTask };
};

export default useItem;
