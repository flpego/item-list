
const input = document.querySelector("#input");
const addTaskButton = document.querySelector("#add-task");
const tasksContainer = document.querySelector("#tasks-container");

const tasks = {};
let taskIdCounter = 0;

const addTask = (title) => {
    const taskId = taskIdCounter;
    tasks[taskId] = { id: taskId, title: title };
    taskIdCounter++;
}

function renderTasks(e) {
    e.preventDefault(); //previene el funcionamiento por defecto del form

    const inputValue = input.value;

    if (inputValue.trim() !== "") {



        addTask(inputValue);

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const task = document.createElement("p");

        const taskEndButton = document.createElement("i");
        taskEndButton.classList = "fa-solid fa-check green";
        taskEndButton.addEventListener("click", () => {
            if (taskDiv.classList.contains("taskEnd")) {
                taskDiv.classList.remove("taskEnd"); // Si ya tiene la clase, la quitamos
            } else {
                taskDiv.classList.add("taskEnd"); // Si no tiene la clase, la agregamos
            }
        });



        task.innerText = inputValue;


        const deleteTaskButton = document.createElement("i");
        deleteTaskButton.classList = "fa-solid fa-trash red";

        deleteTaskButton.addEventListener("click", () => {
            // Elimina la tarea del objeto y del DOM
            delete tasks[taskIdCounter - 1];
            taskDiv.remove();
        });

        taskDiv.appendChild(task);
        taskDiv.appendChild(deleteTaskButton);
        taskDiv.appendChild(taskEndButton);
        tasksContainer.appendChild(taskDiv);

        // Limpia el campo de entrada después de agregar la tarea
        input.value = "";
    }
    console.log(tasks)
}

addTaskButton.addEventListener("click", renderTasks);