
import { renderApp, renderTasks } from './modules/renderApp.js';
import { getStorage } from './modules/storageActions.js';
import { formEvent, tableEvent } from './modules/сlickEvents.js';

const init = () => {
  const { keyStorage, form, input, addBtn, clearBtn, list } = renderApp();
  const allTasks = renderTasks(list, getStorage(keyStorage));

  formEvent(keyStorage, form, input, addBtn, clearBtn, list);
  tableEvent(list);
};

init();
