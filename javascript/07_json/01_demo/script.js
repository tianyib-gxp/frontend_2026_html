function addItem(text) {
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

function runDemo() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  // JSON.parse の例
  const jsonString = '{"name":"田中","age":28,"skills":["JavaScript","HTML","CSS"]}';
  const obj = JSON.parse(jsonString);

  addItem("【JSON.parse の結果】");
  addItem("  名前: " + obj.name);
  addItem("  年齢: " + obj.age);
  addItem("  スキル: " + obj.skills.join(", "));

  // JSON.stringify の例
  const newObj = { city: "Tokyo", active: true, score: 95 };
  const newJson = JSON.stringify(newObj);
  addItem("【JSON.stringify の結果】");
  addItem("  " + newJson);

  // 整形出力
  const prettyJson = JSON.stringify(obj, null, 2);
  addItem("【整形 (indent=2) の結果】");
  prettyJson.split("\n").forEach((line) => addItem("  " + line));
}
