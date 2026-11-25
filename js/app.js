let entries = [];
let currentIndex = 0;

function todaysIndex() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  return dayOfYear % entries.length;
}

function showEntry(index) {
  const entry = entries[index];
  document.getElementById("theme").textContent = entry.theme;
  document.getElementById("idea").textContent = entry.idea;
  document.getElementById("explanation").textContent = entry.explanation;
  document.getElementById("action").textContent = entry.action;
  document.getElementById("position").textContent = (index + 1) + " of " + entries.length;
}

async function start() {
  const response = await fetch("data/entries.json");
  entries = await response.json();
  currentIndex = todaysIndex();
  showEntry(currentIndex);

  document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + entries.length) % entries.length;
    showEntry(currentIndex);
  });

  document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % entries.length;
    showEntry(currentIndex);
  });
}

start();