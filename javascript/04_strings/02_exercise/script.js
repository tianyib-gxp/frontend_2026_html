function generateGreeting() {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - #input-name, #input-age, #input-place, #input-hobby の値を取得する
   * - テンプレートリテラル（バッククォート）を使ってメッセージを作成する
   * - #greeting-output の textContent にメッセージを設定する
   *
   * 表示例:
   *   はじめまして！
   *   私の名前は田中 太郎です。
   *   年齢は24歳で、東京出身です。
   *   趣味は読書です。
   *   よろしくお願いします！
   *
   * ヒント:
   * - テンプレートリテラルの中で改行すると、実際に改行される
   * - document.getElementById('input-name').value で値を取得できる
   * =========================================
   */
  const inputName = document.getElementById('input-name').value;
  const inputAge = document.getElementById('input-age').value;
  const inputPlace = document.getElementById('input-place').value;
  const inputHobby = document.getElementById('input-hobby').value;

  //console.log(inputName, inputAge, inputHobby, inputPlace);

  let greeting = `
  はじめまして！
  私の名前は${inputName}です。
  年齢は${inputAge}歳で、${inputPlace}出身です。
  趣味は${inputHobby}です。
  よろしくお願いします！
  `;

  document.getElementById('greeting-output').textContent = greeting;
}
