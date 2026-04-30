function generateSplitMessage() {
  // 入力値を取得して適切な型に変換する
  const eventName = document.getElementById('event-name').value;
  const totalBill = Number(document.getElementById('total-bill').value);
  const numPeople = Number(document.getElementById('num-people').value);

  // 1人分の金額を計算する（小数点以下切り捨て）
  const perPerson = Math.floor(totalBill / numPeople);

  // 余り（端数）を計算する
  const remainder = totalBill - perPerson * numPeople;

  // テンプレートリテラルでメッセージを作成する
  const message = `【${eventName}のお会計】
合計: ¥${totalBill}
参加人数: ${numPeople}人
1人分: ¥${perPerson}
${remainder > 0 ? `端数: ¥${remainder}（代表者が支払い）` : '端数なし'}`;

  document.getElementById('split-output').textContent = message;
}
