function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

const person = {
  name: { first: "太郎", last: "山田" },
  age: 28,
  hobbies: ["読書", "プログラミング", "料理"],
  greet() {
    return `こんにちは、${this.name.first}${this.name.last}です！`;
  },
};

function runDemo() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  // ドット記法
  addItem("名前（ドット記法）: " + person.name.first + " " + person.name.last);
  addItem("年齢: " + person.age);

  // ブラケット記法
  addItem('趣味（ブラケット記法）: ' + person["hobbies"].join(", "));

  // メソッド
  addItem(person.greet());

  // プロパティの追加
  person.job = "エンジニア";
  addItem("職業（追加後）: " + person.job);
}
