function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

// オブジェクトリテラルで book を定義し、describe() メソッドを付ける
const book = {
  title: 'JavaScript入門',
  author: '田中 一郎',
  year: 2023,
  pages: 320,
  // this で同じオブジェクトのプロパティにアクセスできる
  describe() {
    return `「${this.title}」（${this.author}、${this.year}年、${this.pages}ページ）`;
  },
};

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  addItem('タイトル: ' + book.title);
  addItem('著者: ' + book.author);
  addItem('出版年: ' + book.year);
  addItem('ページ数: ' + book.pages);
  addItem(book.describe());
}
