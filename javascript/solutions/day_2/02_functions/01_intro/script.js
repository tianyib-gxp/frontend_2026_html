function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function sayHello() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  // 解答
  addItem("Hello");
}
