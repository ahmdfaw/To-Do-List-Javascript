const date = document.getElementById("date");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const clrBtn = document.getElementById("clear-btn");

function addTask() {
  if (input.value === "") {
    alert("Isi Tugas Dulu!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    todoList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("todo", todoList.innerHTML);
}

function showTask() {
  todoList.innerHTML = localStorage.getItem("todo");
}

showTask();

const dateFormat = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

date.innerHTML = today.toLocaleDateString("en-US", dateFormat);

function clearAll() {
  if (confirm("Apakah yakin untuk hapus semuanya??")) {
    todoList.innerHTML = "";
    localStorage.removeItem("todo");
  }
}

clearBtn.addEventListener("click", clearAll);
