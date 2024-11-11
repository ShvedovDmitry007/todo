import { createTask } from './createElement.js';
import { randomId, tasksNumberChange } from './helpers.js';
import {removeStorage, setStorage } from './storageActions.js';

export const formEvent = (keyStorage, form, input, addBtn, clearBtn, list, appData) => {

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData);
    
    const task = {
      id: randomId(),
      taskName: newTask.task,
      taskNum: 1,
      done: false,
    };

    appData.push(task);
    list.append(createTask(task, newTask));
    setStorage(keyStorage, task);
    addBtn.disabled = true;
    form.reset();
    tasksNumberChange(list);
  });

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      addBtn.disabled = false;
    } 
  });

  clearBtn.addEventListener('click', () => {
    addBtn.disabled = true;
  });


};

export const tableEvent = (list, data, keyStorage) => {
  console.log(data);
    list.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('.btn-success')) {
        const targetId = target.closest('tr').dataset.id;
        const targetData = data.find((item) => item.id === targetId);
        
        targetData.done =! targetData.done;
        localStorage.setItem(keyStorage, JSON.stringify(data));
        target.closest('tr').classList = targetData.done ? 'table-success' : 'table-light';
        target.closest('.btn-success').textContent = targetData.done ? 'Выполнена' : 'Завершить';
        target.closest('tr').querySelector('.status').textContent = targetData.done ? 'Выполнена' : 'В работе';      
      } 

      if (target.closest('.btn-danger')) {
        const targetId = target.closest('tr').dataset.id;
        target.closest('tr').remove();
        removeStorage(targetId, keyStorage);
        tasksNumberChange(list);
      }
    }); 
};