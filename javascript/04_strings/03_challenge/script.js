function generateSplitMessage() {
  // ここにコードを書いてください
  // ヒント: 入力値を取得して Number() で数値に変換する
  // ヒント: 1人分 = Math.floor(合計 / 人数)  (小数点切り捨て)
  // ヒント: テンプレートリテラルで複数行のメッセージを作成する
  // ヒント: #split-output の textContent に設定する

  const event = document.getElementById('event-name').value;
  const total = document.getElementById('total-bill').value;
  const people = document.getElementById('num-people').value;
  const onePeopleBill = Math.floor(total / people);

  let message = `
  ${event}のイベントで${people}人が参加し、食事金額の合計は${total}円になりました。
  一人${onePeopleBill}円頂戴～
  `;
  document.getElementById('split-output').textContent = message;
}
