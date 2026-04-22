function showProfile() {
  const output = document.getElementById('profile');
  output.innerHTML = '';

  // 変わらない値は const を使う
  const name = '田中 太郎';
  const age = 24;
  const job = 'エンジニア';
  const hobbies = ['読書', '映画', 'ゲーム', '登山'];

  // それぞれの値を段落として追加する
  const fields = [
    `名前: ${name}`,
    `年齢: ${age}`,
    `職業: ${job}`,
    `趣味: ${hobbies.join(', ')}`,
  ];

  for (const field of fields) {
    const p = document.createElement('p');
    p.textContent = field;
    output.appendChild(p);
  }
}
