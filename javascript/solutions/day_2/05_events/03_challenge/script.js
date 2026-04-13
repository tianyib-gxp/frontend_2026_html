// submit イベントを登録し、入力値をバリデーションする
document.getElementById("myForm").addEventListener("submit", (e) => {
  // ブラウザデフォルトのページ遷移を常に防ぐ
  e.preventDefault();

  const name  = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  const error = document.getElementById("error");

  // 両方入力されているかチェック
  if (name === "" || email === "") {
    error.textContent = "名前とメールを両方入力してください。";
  } else {
    error.textContent = "送信成功！";
  }
});
