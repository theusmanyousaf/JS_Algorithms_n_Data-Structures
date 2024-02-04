const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// This array will enable you to keep track of tasks, display them on the page, and save them to localStorage
const taskData = JSON.parse(localStorage.getItem("data")) || []; // to retrieve the tasks saved in local storage and render in UI

let currentTask = {} // This variable will be used to track the state when editing and discarding tasks.

const addOrUpdateTask = () => {
    addOrUpdateTaskBtn.innerText = "Add Task"; // 'update task' bug fix
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id); // if task already exists in the array
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,// unique ID for each task
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };

    if (dataArrIndex === -1) {
        taskData.unshift(taskObj);
    } else {
        taskData[dataArrIndex] = taskObj;  // for edit function to render changes we need to update taskObj
    }

    localStorage.setItem("data", JSON.stringify(taskData)); // saves taskData array in string format in localStorage and would persist data once user adds or updated tasks
    updateTaskContainer()
    reset()
};

const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";

    taskData.forEach(
        ({ id, title, date, description }) => {
            (tasksContainer.innerHTML += `
          <div class="task" id="${id}">
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Description:</strong> ${description}</p>
            <button onclick="editTask(this)" type="button" class="btn">Edit</button>
            <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
          </div>
        `)
        }
    );
};

const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex( // index of data we want to delete
        (item) => item.id === buttonEl.parentElement.id
    );
    buttonEl.parentElement.remove() // removing it from dom
    taskData.splice(dataArrIndex, 1) // removing from taskData array
    localStorage.setItem("data", JSON.stringify(taskData)); // we are just updating data again after deletion
}

const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
        (item) => item.id === buttonEl.parentElement.id
    );

    currentTask = taskData[dataArrIndex];

    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";

    taskForm.classList.toggle("hidden");
}

const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
}

if (taskData.length) { // for rendering already present tasks in UI
    updateTaskContainer();
}

openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden") // The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.
);

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
    // If the user attempts to edit a task but decides not to make any changes before closing the form, there is no need to display the modal with the Cancel and Discard buttons.
    const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

    if (formInputsContainValues && formInputValuesUpdated) {
        confirmCloseDialog.showModal(); // The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.
    } else {
        reset();
    }
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset(); // when you click the Discard button, everything in the input fields should go away.
});

// getting the values from the input fields, save them into the taskData array, and display them on the page.
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    addOrUpdateTask();
})

{/*If you check the Application tab of your browser console, you'll notice a series of [object Object].
This is because everything you save in localStorage needs to be in string format.
To resolve the issue, wrap the data you're saving in the JSON.stringify() method.*/}

{/*

localStorage.setItem("data", JSON.stringify(myTaskArr)); 

localStorage.removeItem("data") // removes data from localStorage with Key named "data"
localStorage.clear() // removes all key/value pairs in localStorage

const getTaskArr = localStorage.getItem("data")
console.log(getTaskArr)

const getTaskArrObj = JSON.parse(localStorage.getItem("data")); //  To view it in its original form before saving, you use JSON.parse()
console.log(getTaskArrObj)

*/}