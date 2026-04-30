/**
 * =====================================
 * 問題：showMessage を完成させる
 *
 * 条件：
 * - 引数に型をつける
 * - 戻り値の型をつける
 * - text と type を使って表示する
 *
 * ヒント：
 * - type は "error" または "success"
 * =====================================
 */
function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');

  li.textContent = text;
  list.appendChild(li);
}

function showMessage(text, type) {
  // ここに実装
}

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  showMessage('保存できました', 'success');
  showMessage('エラーが発生しました', 'error');

  // 型確認
  // showMessage("テスト", "warning");
}

(window as any).run = run;
