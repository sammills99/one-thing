async function showTodaysEntry() {
  const response = await fetch("data/entries.json");
  const entries = await response.json();

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  const entry = entries[dayOfYear % entries.length];

  document.getElementById("theme").textContent = entry.theme;
  document.getElementById("title").textContent = entry.title;
  document.getElementById("idea").textContent = entry.idea;
  document.getElementById("explanation").textContent = entry.explanation;
  document.getElementById("action").textContent = "Try today: " + entry.action;
  document.getElementById("source").textContent = entry.source;
}

showTodaysEntry();