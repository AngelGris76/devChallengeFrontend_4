const editItem = (id, newValue) => {
  window.localStorage.setItem(id, JSON.stringify(newValue));
};

export default editItem;
