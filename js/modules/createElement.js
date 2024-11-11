export const createTitle = () => {
  const userName = prompt('Введите ваше имя:')
  const title = document.createElement('h3');
  title.textContent = `Список дел - ${userName}`;
  title.userName = userName;
  
  return title;
};

export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');

  const label = document.createElement('label');
  label.classList.add('form-group', 'me-3', 'mb-0');

  const input = document.createElement('input');
  input.classList.add('form-control');
  input.type = 'text';
  input.name = 'task';
  input.placeholder = 'Ввести задачу'; 

  const addBtn = document.createElement('button');
  addBtn.classList.add('btn', 'btn-primary', 'me-3');
  addBtn.type = 'submit';
  addBtn.textContent = 'Сохранить';
  addBtn.disabled = true;

  const clearBtn = document.createElement('button');
  clearBtn.classList.add('btn', 'btn-warning');
  clearBtn.type = 'reset';
  clearBtn.textContent = 'Очистить';

  label.append(input);
  form.append(label, addBtn, clearBtn);

  return {
    form,
    input,
    addBtn,
    clearBtn,
  };
};

export const createTable = () => {
  const tableWrapper = document.createElement('div');
  tableWrapper.classList.add('table-wrapper');

  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>  
  `);

  const tbody = document.createElement('tbody');
  tableWrapper.tbody = tbody;
  
  table.append(thead, tbody);
  tableWrapper.append(table);

  return tableWrapper;
};

export const createTask = ({id, taskName, done}) => {
  const tr = document.createElement('tr');
  tr.setAttribute('data-id', id);

  const tdNumber = document.createElement('td');
  tdNumber.classList.add('task-number');

  const tdTask = document.createElement('td');
  tdTask.classList.add('task');
  tdTask.textContent = taskName;

  const tdStatus = document.createElement('td');
  tdStatus.classList.add('status');

  const tdBtns = document.createElement('td');
  const delBtn = document.createElement('button');
  delBtn.classList.add('btn', 'btn-danger', 'me-3');
  delBtn.type = 'button';
  delBtn.textContent = 'Удалить';

  const doneBtn = document.createElement('button');
  doneBtn.classList.add('btn', 'btn-success');
  delBtn.type = 'button';


  if (done === false) {
    tr.classList.add('table-light');
    tdStatus.textContent = 'В работе';
    doneBtn.textContent = 'Завершить';
  } else {
    tr.classList.add('table-success');
    tdStatus.textContent = 'Выполнена';
    doneBtn.textContent = 'Возобновить';
  }

  tdBtns.append(delBtn, doneBtn);
  tr.append(tdNumber, tdTask, tdStatus, tdBtns);

  return tr;
};