import { createTask } from './createElement.js';
import * as help from './helpers.js';
import * as storage from './storageActions.js';

export const formEvent = (key, form, input, addBtn, clearBtn, list, data) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData);
    const task = {
      id: help.randomId(),
      taskName: newTask.task,
      taskNum: 1,
      done: false,
    };

    data.push(task);
    list.append(createTask(task, newTask));
    storage.setStorage(key, task);
    addBtn.disabled = true;
    form.reset();
    help.tasksNumberChange(list);
  });

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      addBtn.disabled = false;
    } else if (input.value.trim() === '') {
      addBtn.disabled = true;
    }
  });

  clearBtn.addEventListener('click', () => {
    addBtn.disabled = true;
  });
};

export const tableEvent = (list, data, key) => {
  list.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.btn-success')) {
      const targetId = target.closest('tr').dataset.id;
      const targetData = data.find((item) => item.id === targetId);
      targetData.done =! targetData.done;
      localStorage.setItem(key, JSON.stringify(data));
      target.closest('tr').classList = targetData.done ? 'table-success' : 'table-light';
      target.closest('.btn-success').textContent = targetData.done ? 'Возобновить' : 'Завершить';
      target.closest('tr').querySelector('.status').textContent = targetData.done ? 'Выполнена' : 'В работе';
    }

    if (target.closest('.btn-danger')) {
      const targetId = target.closest('tr').dataset.id;
      target.closest('tr').remove();
      storage.removeStorage(targetId, key, data);
      help.tasksNumberChange(list);
    }
  }); 
};