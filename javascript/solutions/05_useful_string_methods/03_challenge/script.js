function parseStation() {
  // 入力値を取得する
  const data = document.getElementById('station-data').value;

  // セミコロンの位置を探す
  const semicolonIndex = data.indexOf(';');

  // 最初の3文字が駅コード → 大文字に変換
  const stationCode = data.slice(0, 3).toUpperCase();

  // セミコロンより後の部分が駅名
  const stationName = data.slice(semicolonIndex + 1);

  // "コード: 駅名" の形式で表示する
  const result = `${stationCode}: ${stationName}`;
  document.getElementById('station-output').textContent = result;
}
