import { createTask } from './createElement.js';
import { randomId } from './helpers.js';
import {setStorage } from './storageActions.js';

export const formEvent = (keyStorage, form, input, addBtn, clearBtn, list) => {

  form.addEventListener('submit', e => {
    e.preventDefault();

    const task = {
      id: randomId(),
      taskNum: 1,
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

export const tableEvent = (list) => {


    const doneButtons = list.querySelectorAll('.btn-success');
    const delButtons = list.querySelectorAll('.btn-danger');


    const doneTask = (e) => {
      const target = e.target;
      const eventTarget = target.closest('.table-light');
      const eventTargetsuccess = target.closest('.table-success');
      
      if (eventTarget) {
        
        eventTarget.classList.add('table-success');
        eventTarget.classList.remove('table-light');
        eventTarget.querySelector('.task').classList.add('text-decoration-line-through');
        eventTarget.querySelector('.status').textContent = 'Выполнена';
      } else if (eventTargetsuccess) {
        eventTarget.classList.add('table-light');
        eventTarget.classList.remove('table-success');
        eventTarget.querySelector('.task').classList.remove('text-decoration-line-through');
        eventTarget.querySelector('.status').textContent = 'В работе';
      }
      
      // eventTarget.classList.replace('table-light', 'table-success');
      // eventTarget.querySelector('.task').classList.add('text-decoration-line-through');
      // eventTarget.querySelector('.status').textContent = 'Выполнена';

      console.log(eventTarget);
    };

    const deleteTask = (e) => {
      const target = e.target;
      const eventTarget = target.closest('.table-light');
      const eventTargetsuccess = target.closest('.table-success');

      if (eventTarget) {
        eventTarget.remove();
      } else if (eventTargetsuccess) {
        eventTargetsuccess.remove();
      };

      
    };

    doneButtons.forEach((doneBtn) => {
      doneBtn.addEventListener('click', doneTask);
    });

    delButtons.forEach((delBtn) => {
      delBtn.addEventListener('click', deleteTask);
    });


    // if (target.closest('.btn-success')) {
    //   console.log('Завершить');

    //   eventTarget.classList.replace('table-light', 'table-success');
    //   eventTarget.querySelector('.task').classList.add('text-decoration-line-through');
    //   eventTarget.querySelector('.status').textContent = 'Выполнена';
    // } 

    // if (target.closest('.btn-danger')) {
    //   console.log('Удалить');

    //   eventTarget.remove();
    // }

};