function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

// 解答
function add(a, b) {
  return a + b;
}

function run() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const result = add(3, 5);
  addItem(result);
}
