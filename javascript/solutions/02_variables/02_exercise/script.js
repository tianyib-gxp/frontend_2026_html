function showProfile() {
  const output = document.getElementById('profile');
  output.innerHTML = '';

  // 変わらない値は const を使う
  const name = '田中 太郎';
  const age = 24;
  const job = 'エンジニア';

  // 名前を段落として追加する
  const p1 = document.createElement('p');
  p1.textContent = `名前: ${name}`;
  output.appendChild(p1);

  // 年齢を段落として追加する
  const p2 = document.createElement('p');
  p2.textContent = `年齢: ${age}`;
  output.appendChild(p2);

  // 職業を段落として追加する
  const p3 = document.createElement('p');
  p3.textContent = `職業: ${job}`;
  output.appendChild(p3);
}
