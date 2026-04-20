// submit イベントを登録し、入力値をバリデーションする
document.getElementById('myForm').addEventListener('submit', (e) => {
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const error = document.getElementById('error');

  // 両方入力されているかチェック
  if (name === '' || email === '') {
    // ブラウザデフォルトのページ遷移を防ぐ
    e.preventDefault();
    error.textContent = '名前とメールを両方入力してください。';
  } else {
    error.textContent = '送信成功！';
  }
});
