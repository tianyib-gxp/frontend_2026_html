function fixCityName() {
  // 入力値を取得する
  const input = document.getElementById('city-input').value;

  // 最初の文字を大文字、残りを小文字にする
  const fixed = input[0].toUpperCase() + input.slice(1).toLowerCase();

  // 結果を表示する
  document.getElementById('city-output').textContent = `"${input}" → "${fixed}"`;
}
