import { createTask } from './createElement.js';
import {setStorage } from './storageActions.js';

export const formEvent = (keyStorage, form, input, addBtn, clearBtn, list) => {

  form.addEventListener('submit', e => {
    e.preventDefault();

    const task = {
      id: 1,
      task: input.value,
      done: false,
    };

    setStorage(keyStorage, task);
    list.append(createTask(task));

    form.reset();
    addBtn.disabled = true;
  });

  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      addBtn.disabled = false;
    } else {
      addBtn.disabled = true;
    }
  });

  clearBtn.addEventListener('click', () => {
    addBtn.disabled = true;
  });
};
