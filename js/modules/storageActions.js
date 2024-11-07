export const getStorage = key => {
  if (localStorage.getItem(key) === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const setStorage = (key, task) => {
  const data = getStorage(key);
  
  localStorage.setItem(key, JSON.stringify(task));
  data.push(JSON.parse(localStorage.getItem(key)));
  localStorage.setItem(key, JSON.stringify(data));
};