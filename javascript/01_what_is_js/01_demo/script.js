function updateName() {
  const name = prompt("あなたの名前は？");
  if (name) {
    document.getElementById('greeting').textContent =
      `こんにちは、${name}さん！JavaScriptがDOMを変更しました。`;
    document.getElementById('nameBtn').textContent = 'もう一度入力';
  }
}
