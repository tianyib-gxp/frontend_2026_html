function addItem(listId, text) {
  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById(listId).appendChild(li);
}

function showQuotes() {
  const list = document.getElementById('quote-list');
  list.innerHTML = '';

  const a = 'シングルクォート';
  const b = "ダブルクォート";
  const c = `バッククォート`;
  const d = "It's a pen";
  const e = '彼は"こんにちは"と言った';

  addItem('quote-list', `シングル: ${a}`);
  addItem('quote-list', `ダブル: ${b}`);
  addItem('quote-list', `バッククォート: ${c}`);
  addItem('quote-list', `ダブルの中にシングル: ${d}`);
  addItem('quote-list', `シングルの中にダブル: ${e}`);
}

function showTemplateLiteral() {
  const name = '田中';
  const age = 24;
  const score = 87.5;

  // 連結演算子での書き方
  const msg1 = 'こんにちは、' + name + 'さん。' + age + '歳ですね。';

  // テンプレートリテラルでの書き方
  const msg2 = `こんにちは、${name}さん。${age}歳ですね。`;

  // 式も埋め込める
  const msg3 = `${name}さんのスコア: ${score} (合否: ${score >= 60 ? '合格' : '不合格'})`;

  const output = document.getElementById('template-output');
  output.innerHTML = `
    <p>連結演算子: ${msg1}</p>
    <p>テンプレートリテラル: ${msg2}</p>
    <p>式の埋め込み: ${msg3}</p>
  `;
}

function showConversion() {
  const list = document.getElementById('convert-list');
  list.innerHTML = '';

  // 文字列 → 数値
  const str = '42';
  const num = Number(str);
  addItem('convert-list', `Number("${str}") → ${num}  (typeof: ${typeof num})`);

  // 数値 → 文字列
  const n = 100;
  const s = String(n);
  addItem('convert-list', `String(${n}) → "${s}"  (typeof: ${typeof s})`);

  // 文字列 + 数値 = 連結
  addItem('convert-list', `"3" + 4 → "${'3' + 4}"  （文字列として連結）`);
  addItem('convert-list', `Number("3") + 4 → ${Number('3') + 4}  （数値として加算）`);
}
