function addItem(listId, text) {
  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById(listId).appendChild(li);
}

function showIfElse() {
  const list = document.getElementById('ifelse-list');
  list.innerHTML = '';

  const scores = [95, 75, 55, 35];

  for (const score of scores) {
    let grade;
    if (score >= 90) {
      grade = '優秀';
    } else if (score >= 70) {
      grade = '合格';
    } else if (score >= 50) {
      grade = 'ギリギリ';
    } else {
      grade = '不合格';
    }
    addItem('ifelse-list', `スコア ${score} → ${grade}`);
  }
}

function showSwitch() {
  const list = document.getElementById('switch-list');
  list.innerHTML = '';

  const days = ['Monday', 'Wednesday', 'Saturday', 'Sunday', 'Holiday'];

  for (const day of days) {
    let label;
    switch (day) {
      case 'Monday':
        label = '月曜日 (平日)';
        break;
      case 'Tuesday':
        label = '火曜日 (平日)';
        break;
      case 'Wednesday':
        label = '水曜日 (平日)';
        break;
      case 'Saturday':
      case 'Sunday':
        label = '週末';
        break;
      default:
        label = '不明な曜日';
    }
    addItem('switch-list', `"${day}" → ${label}`);
  }
}

function showTernary() {
  const list = document.getElementById('ternary-list');
  list.innerHTML = '';

  const ages = [15, 18, 25];
  for (const age of ages) {
    const status = age >= 18 ? '成人' : '未成年';
    addItem('ternary-list', `年齢 ${age} → ${status}`);
  }

  const nums = [0, 5, -3];
  for (const n of nums) {
    const sign = n > 0 ? '正' : n < 0 ? '負' : 'ゼロ';
    addItem('ternary-list', `${n} → ${sign}`);
  }
}
