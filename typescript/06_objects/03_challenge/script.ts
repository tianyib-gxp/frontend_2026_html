function addResult(text: string): void {
  const list = document.getElementById("result-list") as HTMLUListElement;
  const li: HTMLLIElement = document.createElement("li");

  li.textContent = text;
  list.appendChild(li);
}

/**
 * =============================================
 * ここに class Employee を作ってください
 *
 * 要件:
 * - プロパティに型を付ける
 *   name: string
 *   department: string
 *   salary: number
 *
 * - constructor を作る
 * - introduce(): string
 * - getRaise(percent: number): number
 * =============================================
 */

function runChallenge(): void {
  const list = document.getElementById("result-list") as HTMLUListElement;
  list.innerHTML = "";

  const emp1 = new Employee("田中", "営業", 350000);
  const emp2 = new Employee("佐藤", "開発", 420000);
  const emp3 = new Employee("山田", "人事", 300000);

  const employees: Employee[] = [emp1, emp2, emp3];

  for (let i: number = 0; i < employees.length; i++) {
    addResult(employees[i].introduce());
    const newSalary: number = employees[i].getRaise(10);
    addResult(` → 10%昇給後: ${newSalary}円`);
  }

  // 型チェック
  // const error = new Employee(123, "営業", 300000);
}

(window as any).runChallenge = runChallenge;