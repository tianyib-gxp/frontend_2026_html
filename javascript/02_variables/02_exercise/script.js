function showProfile() {
  const output = document.getElementById('profile');
  output.innerHTML = '';

  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - 以下の変数を宣言する:
   *     name  （文字列）: 自分の名前
   *     age   （数値）:   年齢
   *     job   （文字列）: 職業
   * - 変わらない値は const を使う
   * - #profile に各変数を1行ずつ表示する
   *
   * 表示例:
   *   名前: 田中 太郎
   *   年齢: 24
   *   職業: エンジニア
   *
   * ヒント:
   * - const p1 = document.createElement('p'); で段落を作成する
   * - p1.textContent = `名前: ${name}`; でテキストを設定する
   * - output.appendChild(p1); で追加する
   * - name, age, job それぞれに同じ手順を繰り返す
   * =========================================
   */

  const name = '包天翊';
  const age = 25;
  const job = 'Employee at GxP';

  const p1 = document.createElement('p');

  p1.textContent = `名前：${name}`;
  output.appendChild(p1);

  const p2 = document.createElement('p');
  p2.textContent = `年齢：${age}`;
  output.appendChild(p2);

  const p3 = document.createElement('p');
  p3.textContent = `職業：${job}`;
  output.appendChild(p3);
}
