
import { renderApp, renderTasks } from './modules/renderApp.js';
import { getStorage } from './modules/storageActions.js';
import { formEvent, tableEvent } from './modules/сlickEvents.js';

const init = () => {
  const { keyStorage, form, input, addBtn, clearBtn, list } = renderApp();
  const appData = getStorage(keyStorage);
  renderTasks(list, appData);

  formEvent(keyStorage, form, input, addBtn, clearBtn, list, appData);
  tableEvent(list, appData, keyStorage);
};

init();
