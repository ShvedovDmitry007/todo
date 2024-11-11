export const randomId = () => {
  let result = '';
  for (let i = 0; i < 3; i++) {
      result += Math.floor(Math.random() * 10);
  }
  return result;
};

export const tasksNumberChange = (tableBody) => {
  const tasks = tableBody.querySelectorAll('tr');
  tasks.forEach((task, index) => {
    task.cells[0].textContent = `${index + 1}`
  });
};