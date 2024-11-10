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

// export const removeStorage = (task, keyStorage) => {
//   const data = getStorage(keyStorage);

//   data.forEach((contact, index) => {
//     if (contact.phone === phone) {
//       data.splice(index, 1);
//       localStorage.setItem(keyStorage, JSON.stringify(data));
//     }
//   });
// };