let count = 0;

function addParagraph() {
  // count を 1 増やす
  count += 1;

  // <p> 要素を作成してテキストを設定する
  const para = document.createElement('p');
  para.textContent = `ボタンが ${count} 回 押されました！`;

  // #output に追加する
  document.getElementById('output').appendChild(para);
}

function resetOutput() {
  // count をリセットする
  count = 0;

  // #output の中身を空にする
  document.getElementById('output').textContent = '';
}
