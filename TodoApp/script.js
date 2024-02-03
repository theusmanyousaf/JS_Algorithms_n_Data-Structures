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
const taskData = []

let currentTask = {} // This variable will be used to track the state when editing and discarding tasks.

const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
}

openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden") // The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.
);

closeTaskFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;

    if (formInputsContainValues) {
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

    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id); // if task already exists in the array
    const taskObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`, // unique ID for each task
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };

    if (dataArrIndex === -1) { // adding task to array if condition does not match
        taskData.unshift(taskObj);
    }

    taskData.forEach(({ id, title, date, description }) => { // looping and displaying tasks
        (tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button type="button" class="btn">Edit</button>
          <button type="button" class="btn">Delete</button>
        </div>
      `)
    }
    );

    reset();
})