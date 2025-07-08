let tasks = [];
let intervals = {};

async function loadTasks() {
  document.getElementById("taskContainer").innerHTML = "Loading...";
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay

  tasks = [
    { id: 1, name: "Task A", progress: 0, status: "Pending" },
    { id: 2, name: "Task B", progress: 0, status: "Pending" },
    { id: 3, name: "Task C", progress: 0, status: "Pending" }
  ];

  renderTasks();
}

function renderTasks() {
  const container = document.getElementById("taskContainer");
  container.innerHTML = "";

  tasks.forEach(task => {
    const card = document.createElement("div");
    card.className = "taskCard";
    card.id = `task-${task.id}`;
    card.innerHTML = `
      <h3>${task.name}</h3>
      <p>Status: <span class="status">${task.status}</span></p>
      <p>Progress: <span class="progress">${task.progress}%</span></p>
    `;
    container.appendChild(card);
  });
}

function startProgress() {
  tasks.forEach(task => {
    if (intervals[task.id] || task.progress >= 100) return;

    intervals[task.id] = setInterval(() => {
      if (task.progress < 100) {
        task.progress += 10;
        task.status = "In Progress";
        updateTaskCard(task);
      }

      if (task.progress >= 100) {
        clearInterval(intervals[task.id]);
        delete intervals[task.id];
        task.progress = 100;
        task.status = "Completed";
        updateTaskCard(task);
      }
    }, 1000);
  });
}

function stopProgress() {
  Object.values(intervals).forEach(clearInterval);
  intervals = {};
}

function delayNotification() {
  setTimeout(() => {
    document.getElementById("notificationPanel").textContent =
      "🔔 Delayed Notification: Check completed tasks!";
  }, 3000);
}

function updateTaskCard(task) {
  const card = document.getElementById(`task-${task.id}`);
  if (!card) return;

  card.querySelector(".status").textContent = task.status;
  card.querySelector(".progress").textContent = `${task.progress}%`;

  if (task.status === "Completed") {
    card.classList.add("completed");
  } else {
    card.classList.remove("completed");
  }
}

document.getElementById("loadTasksBtn").addEventListener("click", loadTasks);
document.getElementById("startBtn").addEventListener("click", startProgress);
document.getElementById("stopBtn").addEventListener("click", stopProgress);
document.getElementById("notifyBtn").addEventListener("click", delayNotification);
