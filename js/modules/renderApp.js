import * as element from './createElement.js';
import { tasksNumberChange } from './helpers.js';

export const renderApp = () => {
  const app = document.querySelector('.app-container');
  app.classList.add(
    'vh-100',
    'w-100',
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'flex-column'
  );
  const title = element.createTitle();
  const keyStorage = title.userName;
  const { form, input, addBtn, clearBtn } = element.createForm();
  const table = element.createTable();

  app.append(title, form, table);

  return {
    keyStorage,
    form,
    input, 
    addBtn, 
    clearBtn,
    list: table.tbody,
  }
};

export const renderTasks = (elem, data) => {
  const allTasks = data.map(element.createTask);
  elem.append(...allTasks);
  tasksNumberChange(elem);

  return allTasks;
};
