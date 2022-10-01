const createItem = (newItem) => {
  const taskID = Date.now();
  // self.crypto.randomUUID();
  window.localStorage.setItem(taskID, JSON.stringify(newItem));

  return { id: taskID, ...newItem };
};

export default createItem;
