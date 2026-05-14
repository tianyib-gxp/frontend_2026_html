function fixCityName() {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - #city-input の値を取得する
   * - 最初の文字を大文字、残りを小文字に変換する
   * - 結果を #city-output に「"lonDOn" → "London"」の形式で表示する
   *
   * ヒント:
   * - str[0].toUpperCase() で最初の文字を大文字にできる
   * - str.slice(1).toLowerCase() で2文字目以降を小文字にできる
   * - 2つを + で連結する
   * =========================================
   */

  const city = document.getElementById('city-input').value;

  let result = city[0].toUpperCase() + city.slice(1).toLowerCase();

  document.getElementById('city-output').textContent = result;
}
