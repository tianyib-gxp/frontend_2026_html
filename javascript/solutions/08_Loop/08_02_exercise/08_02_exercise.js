function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function runLoop() {
  const list = document.getElementById("list");

  // リセット
  list.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      addItem(i);
    }
  }
}
