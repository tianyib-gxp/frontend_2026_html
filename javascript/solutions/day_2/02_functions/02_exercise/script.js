function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function greet(name) {
  // 解答
  addItem("Hello " + name);
}

function run() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  greet("太郎");
}
