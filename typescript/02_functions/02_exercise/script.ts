function addItem(text: string) {
  const list = document.getElementById('list') as HTMLUListElement;
  const li = document.createElement('li');

  li.textContent = text;
  list.appendChild(li);
}

function greet(name: string) {
  return 'こんにちは、' + name + 'さん！';
}

function runDemo() {
  const list = document.getElementById('list') as HTMLUListElement;
  list.innerHTML = '';

  const names = ['太郎', '花子', '健太'];

  for (let i = 0; i < names.length; i++) {
    addItem(greet(names[i]));
  }

  /**
   * =========================================
   * 確認用
   * =========================================
   * 型を付けたあとに試してください
   */

  //greet(123);
}

// HTMLから呼び出すために必要
(window as any).runDemo = runDemo;
