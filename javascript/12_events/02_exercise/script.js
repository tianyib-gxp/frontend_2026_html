/**
 * =============================================
 * ここにコードを書いてください
 *
 * 要件:
 * - id="countBtn" のボタンに click イベントリスナーを追加する
 * - クリックされるたびにカウントを +1 する
 * - id="countDisplay" の要素に「クリック数: X」を表示する
 *
 * ヒント:
 * - let count = 0; でカウント変数を用意する
 * - document.getElementById("countBtn").addEventListener("click", ...)
 * =============================================
 */
let count = 0;
document.getElementById('countBtn').addEventListener('click', () => {
  count += 1;
  document.getElementById('countDisplay').textContent = `クリック数: ${count}`;
});
