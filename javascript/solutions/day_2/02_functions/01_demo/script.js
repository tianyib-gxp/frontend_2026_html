function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function greet(name) {
  return "こんにちは、" + name + "さん！";
}

function runDemo() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  const names = ["太郎", "花子", "健太"];
  for (let i = 0; i < names.length; i++) {
    addItem(greet(names[i]));
  }
}
