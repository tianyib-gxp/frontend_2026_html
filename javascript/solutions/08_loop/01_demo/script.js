function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function runLoop() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    addItem(i);
  }
}
