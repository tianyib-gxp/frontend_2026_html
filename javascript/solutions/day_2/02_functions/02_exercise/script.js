function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

// 2つの数値を受け取り、その合計を返す
function add(a, b) {
  return a + b;
}

function run() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const result = add(3, 5);
  addItem(result);
}
