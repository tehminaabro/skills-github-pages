

// Get tasks from localStorage or set empty list
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Show all tasks in the list
function renderTasks() {
    const taskList = document.getElementById('taskList')
    taskList.innerHTML = ''

    tasks.forEach((task, index) => {
        const newTask = document.createElement('li')
        newTask.textContent = task

        // Create delete button
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.onclick = function () {
            tasks.splice(index, 1)
            saveTasks()
            renderTasks()
        }

        newTask.appendChild(deleteBtn)
        taskList.appendChild(newTask)
    })
}

// Add new task
function addTask() {
    const input = document.getElementById('inputTask')
    const taskText = input.value.trim()

    if (taskText !== '') {
        tasks.push(taskText)
        input.value = ''
        saveTasks()
        renderTasks()
    }
}

// Run on page load
renderTasks()
