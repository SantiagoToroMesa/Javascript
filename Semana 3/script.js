// Elementos del DOM
const taskNameInput = document.getElementById('taskname');
const taskDescriptionInput = document.getElementById('taskdescription');
const addButton = document.getElementById('addproductButton');
const taskListDiv = document.querySelector('.taskList');

// Función para agregar una nueva tarea
async function addTask() {
    const name = taskNameInput.value.trim();
    const description = taskDescriptionInput.value.trim();

    // Validación básica
    if (!name) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre de la tarea es obligatorio'
        });
        return;
    }

    // Obtener el siguiente ID secuencial como número
    let newId = 1;
    try {
        const response = await fetch('http://localhost:3000/tareas');
        const tasks = await response.json();
        if (tasks.length > 0) {
            newId = Math.max(...tasks.map(t => Number(t.id))) + 1;
        }
    } catch (e) {
        newId = 1;
    }

    // Crear nuevo objeto de tarea asegurando que el id es string
    const newTask = {
        id: String(newId),
        name: String(name),
        description: String(description),
        completed: false
    };

    try {
        await fetch('http://localhost:3000/tareas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        });

        // Limpiar inputs
        taskNameInput.value = '';
        taskDescriptionInput.value = '';

        // Actualizar la vista
        renderTasks();

        // Mostrar confirmación
        Swal.fire({
            icon: 'success',
            title: '¡Tarea agregada!',
            text: 'La tarea se ha agregado correctamente'
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo agregar la tarea'
        });
    }
}

// Función para cambiar el estado de una tarea
async function toggleTaskStatus(taskId) {
    console.log('Toggle recibió ID:', taskId);
    try {
        // Obtener la tarea actual
        const response = await fetch(`http://localhost:3000/tareas/${taskId}`);
        const task = await response.json();

        // Cambiar el estado
        await fetch(`http://localhost:3000/tareas/${taskId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !task.completed })
        });

        renderTasks();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo actualizar la tarea'
        });
    }
}

// Función para eliminar una tarea
async function deleteTask(taskId) {
    console.log('Delete recibió ID:', taskId);
    try {
        await fetch(`http://localhost:3000/tareas/${taskId}`, {
            method: 'DELETE'
        });
        renderTasks();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo eliminar la tarea'
        });
    }
}

// Función para renderizar todas las tareas
async function renderTasks() {
    try {
        const response = await fetch(`http://localhost:3000/tareas`);
        const tasks = await response.json();

        taskListDiv.innerHTML = '';

        if (tasks.length === 0) {
            taskListDiv.innerHTML = '<p>No hay tareas agregadas</p>';
            return;
        }

        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = `task-item ${task.completed ? 'completed' : 'pending'}`;

            taskElement.innerHTML = `
                <div class="task-content">
                    <h4>${task.name}</h4>
                    <p>${task.description || 'Sin descripción'}</p>
                    <span class="status ${task.completed ? 'completed' : 'pending'}">
                        ${task.completed ? 'COMPLETADA' : 'PENDIENTE'}
                    </span>
                </div>
                <div class="task-actions">
                    <button onclick="toggleTaskStatus(${task.id})" class="toggle-btn">
                        ${task.completed ? 'Desmarcar' : 'Completar'}
                    </button>
                    <button onclick="deleteTask(${task.id})" class="delete-btn">Eliminar</button>
                </div>
            `;

            taskListDiv.appendChild(taskElement);
        });
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudieron cargar las tareas'
        });
    }
}

// Event listeners
addButton.addEventListener('click', addTask);

taskNameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

taskDescriptionInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Inicializar la aplicación
renderTasks();
