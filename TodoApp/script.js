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
