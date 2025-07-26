const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>
    `;
    taskList.appendChild(li);

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    const editBtn = li.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
        const taskSpan = li.querySelector('.task-text');
        const newText = prompt('Enter new task text:', taskSpan.textContent);
        if (newText !== null) {
            taskSpan.textContent = newText;
            li.classList.remove('completed');
        }
    });

    const taskSpan = li.querySelector('.task-text');
    taskSpan.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
}