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

export const removeStorage = (targetId, key, data) => {
  data.forEach((element, index) => {
    if (element.id === targetId) {
      data.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(data));
      console.log(localStorage.length);
    }
  });
};