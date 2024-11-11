import { createForm, createTable, createTask, createTitle } from './createElement.js';
import { tasksNumberChange } from './helpers.js';
import { getStorage} from './storageActions.js';

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

  const title = createTitle();
  const keyStorage = title.userName;
  const { form, input, addBtn, clearBtn } = createForm();
  const table = createTable();

  app.append(title, form, table);

  // console.log(getStorage(keyStorage));

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
  const allTasks = data.map(createTask);
  tasksNumberChange
  elem.append(...allTasks);
  tasksNumberChange(elem);

  return allTasks;
};
