const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = taskText;

  const btnGroup = document.createElement("div");
  btnGroup.className = "task-buttons";

  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.innerText = "✏";
  editBtn.addEventListener("click", () => editTask(span, editBtn));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "🗑";
  deleteBtn.addEventListener("click", () => li.remove());

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.innerText = "✅";
  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);
  btnGroup.appendChild(completeBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  taskList.appendChild(li);
  taskInput.value = "";
}

function editTask(span, editBtn) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = span.innerText;
  input.className = "task-text";

  input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      span.innerText = input.value;
      span.className = "task-text";
      input.replaceWith(span);
    }
  });

  span.replaceWith(input);
  input.focus();
}