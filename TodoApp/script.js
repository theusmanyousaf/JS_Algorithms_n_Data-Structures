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

openTaskFormBtn.addEventListener("click", () =>
    taskForm.classList.toggle("hidden") // The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element.
);

closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal(); // The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.
});

cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden");
});
