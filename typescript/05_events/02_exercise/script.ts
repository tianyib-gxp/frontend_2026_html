/**
 * =============================================
 * 問題：クリックカウンターを完成させる
 *
 * 条件：
 * - DOMに型をつける
 * - count に型をつける
 * - clickイベントを追加する
 * =============================================
 */

// カウント変数
let count = 0;

// 要素取得
const btn = document.getElementById('countBtn') as HTMLAnchorElement;
const display = document.getElementById('countDisplay') as HTMLAnchorElement;

// イベント追加
// ここに実装
btn.addEventListener('click', () => {
  count += 1;
  display.textContent = `クリック数: ${count}`;
});
