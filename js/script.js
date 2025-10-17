
let taskDb = [];

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('todo-date');

    if (validateInput(taskInput.value , taskDate.value)){
        const newTask = {
            task: taskInput.value,
            date: taskDate.value

        }
        taskDb.push(newTask);
        renderTasks();

    }

}

function renderTasks() {
    const taskList = document.getElementById('todo-list');
    taskList.innerHTML = '';

    taskDb.forEach((taskObj, index) => {
        taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}<li>`;
    });
}

function deleteAllTasks() {
    taskDb = [];
    renderTasks();
}

function filterTasks() {
    
}

function validateInput(task,date) {
    if (task.trim() === '' || date.trim() === '') {
        alert('Please enter both task and date.');
        return false;
    }
    return true;
}