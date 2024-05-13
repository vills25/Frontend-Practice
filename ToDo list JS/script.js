
let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();
  if (taskName) {
    tasks.push({ id: Date.now(), name: taskName, completed: false });
    renderTasks();
    taskInput.value = '';
  }
}

document.getElementById('taskInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') addTask();
});

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function toggleCompleted(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${task.name}</span><button onclick="toggleCompleted(${task.id})">Complete</button><button onclick="deleteTask(${task.id})">Delete</button>`;
    if (task.completed) listItem.classList.add('completed');
    taskList.appendChild(listItem);
  });
}

renderTasks();
