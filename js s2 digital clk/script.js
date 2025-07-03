const clockEl = document.getElementById('clock');
const greetEl = document.getElementById('greeting');

function pad(n) {
  return n.toString().padStart(2, '0');
}

function getGreeting(h) {
  if (h >= 6 && h < 12)   return 'Good Morning ☀️';
  if (h >= 12 && h < 18)  return 'Good Afternoon 🌤️';
  if (h >= 18 && h < 21)  return 'Good Evening 🌆';
  return 'Good Night 🌙';
}

function updateClock() {
  const now = new Date();
  let hours   = now.getHours();
  const mins  = pad(now.getMinutes());
  const secs  = pad(now.getSeconds());
  const ampm  = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;
  const timeStr = `${pad(hours)}:${mins}:${secs} ${ampm}`;

  clockEl.textContent = timeStr;
  greetEl.textContent = getGreeting(now.getHours());
}

updateClock();
setInterval(updateClock, 1000);
