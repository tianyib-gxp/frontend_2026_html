function addResult(text) {
  const list = document.getElementById("result-list");
  const li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
}

/**
 * =============================================
 * ここにコンストラクター関数 Employee を作ってください
 *
 * - 引数: name (名前), department (部署), salary (給与)
 * - メソッド introduce():
 *     「○○さん（△△部）の給与は□□円です」を return
 * - メソッド getRaise(percent):
 *     給与を percent% 増やして this.salary を更新し、新しい給与を return
 *     例: getRaise(10) → 10%アップ
 *
 * ヒント:
 * function Employee(name, department, salary) {
 *   this.name = name;
 *   ...
 * }
 * =============================================
 */

function runChallenge() {
  const list = document.getElementById("result-list");
  list.innerHTML = "";

  const emp1 = new Employee("田中", "営業", 350000);
  const emp2 = new Employee("佐藤", "開発", 420000);
  const emp3 = new Employee("山田", "人事", 300000);

  const employees = [emp1, emp2, emp3];

  for (let i = 0; i < employees.length; i++) {
    addResult(employees[i].introduce());
    const newSalary = employees[i].getRaise(10);
    addResult(`  → 10%昇給後: ${newSalary}円`);
  }
}
