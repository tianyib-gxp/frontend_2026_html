// リストに項目を追加する関数
function addItem(text: number): void {
  const list = document.getElementById('list') as HTMLUListElement;

  const li: HTMLLIElement = document.createElement('li');
  li.textContent = text.toString();

  list.appendChild(li);
}

// ループ処理
function runLoop(): void {
  const list = document.getElementById('list') as HTMLUListElement;
  list.innerHTML = '';

  for (let i: number = 1; i <= 5; i++) {
    addItem(i);
  }
}
