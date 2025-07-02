// Array para almacenar las tareas (estructura de datos principal)
let tasks = [];

// Elementos del DOM
const taskNameInput = document.getElementById('taskname');
const taskDescriptionInput = document.getElementById('taskdescription');
const addButton = document.getElementById('addproductButton');
const taskListDiv = document.querySelector('.taskList');

// Función para agregar una nueva tarea
function addTask() {
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
    
    // Crear nuevo objeto de tarea
    const newTask = {
        id: Date.now(), // ID único basado en timestamp
        name: name,
        description: description,
        completed: false // Por defecto no está completada
    };
    
    // Agregar la tarea al array
    tasks.push(newTask);
    
    // Limpiar inputs
    taskNameInput.value = '';
    taskDescriptionInput.value = '';
    
    // Actualizar la vista
    renderTasks();
    
    // Guardar automáticamente
    guardarAutomaticamente();
    
    // Mostrar confirmación
    Swal.fire({
        icon: 'success',
        title: '¡Tarea agregada!',
        text: 'La tarea se ha agregado correctamente'
    });
}

// Función para cambiar el estado de una tarea
function toggleTaskStatus(taskId) {
    // Buscar la tarea en el array y cambiar su estado
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderTasks();
        // Guardar automáticamente
        guardarAutomaticamente();
    }
}

// Función para eliminar una tarea
function deleteTask(taskId) {
    // Filtrar el array para excluir la tarea con el ID especificado
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
    // Guardar automáticamente
    guardarAutomaticamente();
}

// ===== FUNCIONES BÁSICAS PARA JSON =====

// Función simple para convertir tareas a JSON
function convertirAJSON() {
    // Convertir el array de tareas a JSON string
    const jsonString = JSON.stringify(tasks, null, 2);
    
    // Mostrar en consola
    console.log('JSON de las tareas:');
    console.log(jsonString);
    
    // Mostrar en pantalla
    Swal.fire({
        title: 'Tareas convertidas a JSON',
        html: `<pre style="text-align: left; max-height: 300px; overflow-y: auto; background: #f8f9fa; padding: 10px; border-radius: 5px;">${jsonString}</pre>`,
        width: '500px'
    });
    
    return jsonString;
}

// Función para guardar automáticamente (sin mostrar alerta)
function guardarAutomaticamente() {
    const jsonString = JSON.stringify(tasks);
    localStorage.setItem('misTareas', jsonString);
    console.log('Tareas guardadas automáticamente');
}

// Función para guardar manualmente (con alerta)
function guardarEnLocalStorage() {
    guardarAutomaticamente();
    Swal.fire('¡Guardado!', 'Tareas guardadas en localStorage', 'success');
}

// Función simple para cargar desde localStorage
function cargarDesdeLocalStorage() {
    const jsonString = localStorage.getItem('misTareas');
    
    if (jsonString) {
        try {
            tasks = JSON.parse(jsonString);
            renderTasks();
            Swal.fire('¡Cargado!', 'Tareas cargadas desde localStorage', 'success');
        } catch (error) {
            Swal.fire('Error', 'Error al cargar las tareas', 'error');
        }
    } else {
        Swal.fire('Info', 'No hay tareas guardadas', 'info');
    }
}

// Función para renderizar todas las tareas
function renderTasks() {
    taskListDiv.innerHTML = '';
    
    if (tasks.length === 0) {
        taskListDiv.innerHTML = '<p>No hay tareas agregadas</p>';
        return;
    }
    
    // Crear contenedor para tareas pendientes
    const pendingTasksDiv = document.createElement('div');
    pendingTasksDiv.className = 'pending-tasks';
    pendingTasksDiv.innerHTML = '<h3>Tareas Pendientes:</h3>';
    
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = `task-item ${task.completed ? 'completed' : 'pending'}`;
        
        taskElement.innerHTML = `
            <div class="task-content">
                <h4>${task.name}</h4>
                <p>${task.description || 'Sin descripción'}</p>
                <span class="status ${task.completed ? 'completed' : 'pending'}">
                    ${task.completed ? 'COMPLETED' : 'PENDIENTE'}
                </span>
            </div>
            <div class="task-actions">
                <button onclick="toggleTaskStatus(${task.id})" class="toggle-btn">
                    ${task.completed ? 'Desmarcar' : 'Completar'}
                </button>
                <button onclick="deleteTask(${task.id})" class="delete-btn">Eliminar</button>
            </div>
        `;
        
        // Solo mostrar tareas pendientes en el div de pendientes
        if (!task.completed) {
            const pendingTaskElement = taskElement.cloneNode(true);
            pendingTasksDiv.appendChild(pendingTaskElement);
        }
        
        taskListDiv.appendChild(taskElement);
    });
    
    // Agregar el div de tareas pendientes al inicio
    taskListDiv.insertBefore(pendingTasksDiv, taskListDiv.firstChild);
}

// Event listeners
addButton.addEventListener('click', addTask);

// Permitir agregar tarea con Enter
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

// Función para cargar tareas al iniciar
function cargarTareasAlIniciar() {
    const jsonString = localStorage.getItem('misTareas');
    
    if (jsonString) {
        try {
            tasks = JSON.parse(jsonString);
            console.log('Tareas cargadas automáticamente al iniciar');
        } catch (error) {
            console.error('Error al cargar tareas:', error);
        }
    }
}

// Inicializar la aplicación
cargarTareasAlIniciar();
renderTasks();
