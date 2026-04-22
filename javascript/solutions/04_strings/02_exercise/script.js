function generateGreeting() {
  // 入力値を取得する
  const name = document.getElementById('input-name').value;
  const age = document.getElementById('input-age').value;
  const place = document.getElementById('input-place').value;
  const hobby = document.getElementById('input-hobby').value;

  // テンプレートリテラルで複数行のメッセージを作成する
  const message = `はじめまして！
私の名前は${name}です。
年齢は${age}歳で、${place}出身です。
趣味は${hobby}です。
よろしくお願いします！`;

  // #greeting-output に表示する
  document.getElementById('greeting-output').textContent = message;
}
