function addResult(text) {
  const list = document.getElementById('result-list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

// コンストラクター関数: new で呼び出すと新しいオブジェクトが作られる
function Employee(name, department, salary) {
  this.name = name;
  this.department = department;
  this.salary = salary;

  // 自己紹介文を返す
  this.introduce = function () {
    return `${this.name}さん（${this.department}）の給与は${this.salary}円です`;
  };

  // 給与を percent% 増やして新しい金額を返す
  this.getRaise = function (percent) {
    this.salary = Math.round(this.salary * (1 + percent / 100));
    return this.salary;
  };
}

function runChallenge() {
  const list = document.getElementById('result-list');
  list.innerHTML = '';

  const emp1 = new Employee('田中', '営業', 350000);
  const emp2 = new Employee('佐藤', '開発', 420000);
  const emp3 = new Employee('山田', '人事', 300000);

  const employees = [emp1, emp2, emp3];

  for (let i = 0; i < employees.length; i++) {
    addResult(employees[i].introduce());
    const newSalary = employees[i].getRaise(10);
    addResult(`  → 10%昇給後: ${newSalary}円`);
  }
}
