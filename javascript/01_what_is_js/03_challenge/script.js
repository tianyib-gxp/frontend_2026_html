let isDark = false;

function toggleTheme() {
  // ここに #main-box の背景色を白と黒で切り替えるコードを書いてください
  // ヒント: isDark フラグを使って現在の状態を管理する
  //         document.getElementById('main-box').style.backgroundColor で色を変更する
  //         文字色も一緒に切り替えると見やすくなります
  if (isDark) {
    isDark = false;
    document.getElementById('main-box').style.backgroundColor = 'white';
    document.getElementById('text-list').style.color = 'black';
  } else {
    isDark = true;
    document.getElementById('main-box').style.backgroundColor = 'black';
    document.getElementById('text-list').style.color = 'white';
  }
}

function addText() {
  // ここにテキストを #text-list に追加するコードを書いてください
  // ヒント:
  // - document.getElementById('text-input').value で入力値を取得する
  // - 空の場合は何もしない
  // - document.createElement('li') でリストアイテムを作成する
  // - 入力欄を空にする（入力後にクリアする）

  const text_input = document.getElementById('text-input').value;
  //console.log('text:' + text_input);
  if (text_input != '') {
    //console.log('if statement');
    const newelement = document.createElement('li');
    newelement.textContent = text_input;
    document.getElementById('text-list').appendChild(newelement);
    document.getElementById('text-input').value = '';
  }
}

function clearList() {
  // ここに #text-list を空にするコードを書いてください
  document.getElementById('text-list').replaceChildren();
}
