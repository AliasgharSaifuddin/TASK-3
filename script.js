document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      taskInput.value = '';
    }
  });
  
  function addTask(taskText) {
    var taskList = document.getElementById('task-list');
    var taskItem = document.createElement('li');
    taskItem.innerHTML = '<span onclick="completeTask(this)">' + taskText + '</span><button onclick="deleteTask(this)">X</button>';
    taskList.appendChild(taskItem);
  }
  
  function completeTask(element) {
    element.parentNode.classList.toggle('done');
  }
  
  function deleteTask(element) {
    element.parentNode.remove();
  }
  