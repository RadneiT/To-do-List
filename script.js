let idCounter = 0;
const input = document.querySelector('input[type="text"]');

// Botón +
userInput.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
});

// Agregar tarea
let addTask = () => {
    idCounter++;
    let newValue = input.value;

    list.innerHTML += `
    <div class="task-container" id="${idCounter}">
        <label>
            <input type="checkbox">
                ${newValue}
        </label>
        <img src="./img/borrar.png" class="closeBtn">
    </div> 
    `

    input.value = '';
    updateStats();
};

// Evento para saber si lo clickeado es el checkbox o la img
list.addEventListener('click', (event) => {
    if (event.srcElement.nodeName == 'INPUT') {
        updateStats();
    } else if (event.srcElement.nodeName == 'IMG') {
        deleteTask(event.srcElement.parentNode.id);
    }
})

// Actualizar estados
let updateStats = () => {
    let element = list.querySelectorAll('div');
    let check = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas pendientes: ${element.length} Completadas: ${check.length}</p>`;
}

// Eliminar tarea
let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}