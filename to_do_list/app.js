const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");

let editElement;
let editFlag = false;
let editID = " ";

window.addEventListener("DOMContentLoaded", setUpTasks);
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

// FUNCTIONS

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createElemenTask(id, value);
    container.classList.add("show-container");
    addToLocalStorage(id, value);

    displayAlert("item added to the list", "success");
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

// ALERT
const displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // REMOVE ALERT
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1500);
};

// DELETE ITEM
function deleteItem(e) {
  const currentElement = e.currentTarget.parentElement.parentElement;
  const id = currentElement.dataset.id;
  list.removeChild(currentElement);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
}

// EDIT ITEM
function editItem(e) {
  const value = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = value.dataset.id;
  submitBtn.textContent = "edit";
}

// CLEAR ITEMS
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  localStorage.removeItem("tasks");
  setBackToDefault();
}

// SET BACK TO DEFAULT
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// LOCAL STORAGE
function addToLocalStorage(id, value) {
  const task = { id, value };
  let tasks = getLocalStorage();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function editLocalStorage(id, value) {
  let tasks = getLocalStorage();
  tasks = tasks.map(function (task) {
    if (task.id === id) {
      task.value = value;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeFromLocalStorage(id) {
  let tasks = getLocalStorage();
  tasks = tasks.filter(function (task) {
    if (task.id !== id) {
      return task;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getLocalStorage() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
}

// LOAD FIRST CONTENT FROM LOCAL STORAGE

function setUpTasks() {
  let tasks = getLocalStorage();
  if (tasks.length > 0) {
    tasks.forEach(function ({ id, value }) {
      createElemenTask(id, value);
    });
    container.classList.add("show-container");
  }
}

// CREAT ARTICLE | TASK on HTML
function createElemenTask(id, value) {
  const element = document.createElement("article");
  // add class
  element.classList.add("grocery-item");
  // add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  // populate the article element
  element.innerHTML = `
          <p class="title">${value}</p>
          <div class="btn-container">
            <button type='button' class='edit-btn' >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type='button' class='delete-btn' >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
    `;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}
