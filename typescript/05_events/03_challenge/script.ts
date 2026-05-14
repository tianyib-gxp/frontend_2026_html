/**
 * =============================================
 * 問題：フォームバリデーションを完成させる
 *
 * 条件：
 * - DOMに型をつける
 * - submitイベントを使う
 * - 空チェックを行う
 * =============================================
 */

// 要素取得
const form = document.getElementById('myForm') as HTMLFormElement;
const nameInput = document.getElementById('nameInput') as HTMLInputElement;
const emailInput = document.getElementById('emailInput') as HTMLInputElement;
const error = document.getElementById('error') as HTMLParagraphElement;

// イベント登録
// ここに実装

form.addEventListener('submit', (e) => {
  const name = nameInput.value;
  const email = emailInput.value;
  if (name === '' || email === '') {
    e.preventDefault();
    error.textContent = '名前とメールを両方入力してください。';
  } else {
    error.textContent = '送信成功！';
  }
});
