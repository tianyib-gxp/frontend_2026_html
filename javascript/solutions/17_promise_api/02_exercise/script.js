// ─── 模擬API（変更不要） ─────────────────────────────────────

function fetchName() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('田中 花子'), 600);
  });
}

function fetchAge() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(22), 400);
  });
}

function fetchCity() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('東京'), 500);
  });
}

// ─── ユーティリティ（変更不要） ──────────────────────────────

const list = document.getElementById('result-list');

function addItem(text) {
  list.innerHTML = list.innerHTML !== '' ? list.innerHTML : '';
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

// ─── ここからコードを書いてください ─────────────────────────
// runAll() を実装してください
// 手順:
//   1. list.innerHTML = ""; でリストをクリア
//   2. Promise.all([fetchName(), fetchAge(), fetchCity()]) を使う
//   3. .then(([name, age, city]) => { ... }) で結果を受け取り addItem() で表示
//   4. .catch(err => addItem("エラー: " + err.message)) でエラーを表示

function runAll() {
  list.innerHTML = '';

  // 3つのPromiseを並行実行し、全て完了したらでデストラクチャリングで結果を受け取る
  Promise.all([fetchName(), fetchAge(), fetchCity()])
    .then(([name, age, city]) => {
      addItem('名前: ' + name);
      addItem('年齢: ' + age);
      addItem('都市: ' + city);
    })
    .catch((err) => addItem('エラー: ' + err.message));
}
