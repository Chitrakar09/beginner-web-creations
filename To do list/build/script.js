const textarea = document.querySelector("input[type=text]");
const button = document.querySelector(".btn");
const taskContainer = document.querySelector(".tasks-container");
const tasksCount = document.querySelector("#tasks-count");
const completesCount = document.querySelector("#complete-count");

// ------------initial values for taskAdd function---------------
let taskCount = 0;
let completeCount = 0;
let newTaskCount;
let newCompleteCount;

// ------------initial values for multiple checkMark function---------------
let lastChecked=null;

//---------------------------------function to checkmark the task---------------------------------

const checkMark = (e) => {
  let checkBox = e.target;
  let taskText = checkBox.parentNode.previousElementSibling;
  taskText.classList.toggle("line-through");
  checkBox.classList.toggle("fa-square-full");
  checkBox.classList.toggle("fa-square-check");
  if (taskText.classList.contains("line-through")) {
    completeCount += 1;
  } else {
    completeCount -= 1;
  }
  completesCount.innerText = completeCount;

  //---------handle multiple checkmarks with shift key---------
  if (e.shiftKey && lastChecked) {
    let checkboxes = [...document.querySelectorAll(".checkbox")];
    let start = checkboxes.indexOf(lastChecked);
    let end = checkboxes.indexOf(checkBox);
    let range = [start, end].sort((a, b) => a - b);
    for (let i = range[0]; i <= range[1]; i++) {
      let box = checkboxes[i];
      let text = box.parentNode.previousElementSibling;
      if (!box.classList.contains("fa-square-check")) {
        box.classList.add("fa-square-check");
        box.classList.remove("fa-square-full");
        text.classList.add("line-through");
        completeCount += 1;
      }
    }
    completesCount.innerText = completeCount;
  }

  lastChecked = checkBox;
};

//---------------------------------function to delete the task---------------------------------

const deleteTask = (e) => {
  let deleteIcon = e.target;
  let taskDiv = deleteIcon.parentNode.parentNode;
  let taskText = deleteIcon.parentNode.previousElementSibling;
  taskDiv.remove();
  if (taskContainer.children.length === 0) {
    taskContainer.classList.add("hidden");
  }
  //----------------subtracting task and complete count---------------
  //----------------SUBTRACTING TASK COUNT-------------
  newTaskCount = parseInt(tasksCount.innerText) - 1;
  if (newTaskCount < 0) {
    newTaskCount = 0;
  }
  taskCount = newTaskCount;
  tasksCount.innerText = newTaskCount;

  //----------------SUBTRACTING COMPLETE COUNT-----------------
  if (taskText.classList.contains("line-through")) {
    newCompleteCount = parseInt(completesCount.innerText) - 1;
    if (newCompleteCount < 0) {
      newCompleteCount = 0;
    }
    completeCount = newCompleteCount;
    completesCount.innerText = newCompleteCount;
  }
};

// ---------------------------------function to add the task---------------------------------
const taskAdd = (e) => {
  let text = textarea.value.trim();
  if (text === "") return; // Prevent empty tasks

  //------------------------------Creating a variable of task for task to append------------------------------

  //   ------------------------Create a task div-------------------------
  const taskDiv = document.createElement("div");
  taskDiv.className = "task";
  //   ------------------------Create a task-text span-------------------------
  const taskText = document.createElement("span");
  taskText.className = "task-text";
  //   ------------------------Create a icons span-------------------------
  const iconSpan = document.createElement("span");
  iconSpan.className = "icons";
  //   ------------------------Create icon-------------------------
  const checkBoxIcon = document.createElement("i");
  checkBoxIcon.className = "checkbox icon fa-regular fa-square-full";
  checkBoxIcon.addEventListener("click", checkMark);

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "icon fa-solid fa-trash-can";
  deleteIcon.addEventListener("click", deleteTask);

  // ----------Appending the divs and spans---------
  taskContainer.classList.remove("hidden");
  taskContainer.append(taskDiv);
  taskText.innerHTML = `<p>$${text}</p>`;
  taskDiv.prepend(taskText);
  taskDiv.append(iconSpan);
  iconSpan.prepend(checkBoxIcon);
  iconSpan.append(deleteIcon);
  // ----------clearing the textarea----------
  textarea.value = "";

  // ----------calculating total no of task------------
  taskCount += 1;

  //-----------display task count-------------
  tasksCount.innerText = taskCount;

  e.preventDefault();
};

button.addEventListener("click", taskAdd);
