function addItem(listId, text) {
  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById(listId).appendChild(li);
}

function showLengthIndex() {
  const list = document.getElementById('length-list');
  list.innerHTML = '';

  const str = 'Hello, World!';

  addItem('length-list', `str = "${str}"`);
  addItem('length-list', `str.length = ${str.length}`);
  addItem('length-list', `str[0] = "${str[0]}"  （最初の文字）`);
  addItem('length-list', `str[str.length - 1] = "${str[str.length - 1]}"  （最後の文字）`);
}

function showSearchMethods() {
  const list = document.getElementById('search-list');
  list.innerHTML = '';

  const str = 'JavaScript は楽しい言語です';

  addItem('search-list', `str = "${str}"`);
  addItem('search-list', `str.includes("楽しい") → ${str.includes('楽しい')}`);
  addItem('search-list', `str.includes("Python") → ${str.includes('Python')}`);
  addItem('search-list', `str.startsWith("JavaScript") → ${str.startsWith('JavaScript')}`);
  addItem('search-list', `str.endsWith("です") → ${str.endsWith('です')}`);
  addItem('search-list', `str.indexOf("は") → ${str.indexOf('は')}  （インデックス）`);
  addItem('search-list', `str.indexOf("Ruby") → ${str.indexOf('Ruby')}  （不在は -1）`);
}

function showTransformMethods() {
  const list = document.getElementById('transform-list');
  list.innerHTML = '';

  const str = 'Hello, World!';
  const messy = 'lonDOn';

  addItem('transform-list', `str = "${str}"`);
  addItem('transform-list', `str.slice(0, 5) = "${str.slice(0, 5)}"`);
  addItem('transform-list', `str.slice(7) = "${str.slice(7)}"`);
  addItem('transform-list', `str.toLowerCase() = "${str.toLowerCase()}"`);
  addItem('transform-list', `str.toUpperCase() = "${str.toUpperCase()}"`);
  addItem('transform-list', `str.replace("World", "JavaScript") = "${str.replace('World', 'JavaScript')}"`);

  const repeated = 'aabbaa';
  addItem('transform-list', `"${repeated}".replaceAll("a", "x") = "${repeated.replaceAll('a', 'x')}"`);

  const fixed = messy[0].toUpperCase() + messy.slice(1).toLowerCase();
  addItem('transform-list', `"${messy}" → "${fixed}"  （大文字補正の例）`);
}
