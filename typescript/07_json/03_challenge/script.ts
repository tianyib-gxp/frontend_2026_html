const employeesJson = `[
  { "name": "田中 太郎", "department": "開発部", "skills": ["JavaScript", "React", "Node.js"] },
  { "name": "佐藤 花子", "department": "デザイン部", "skills": ["CSS", "Figma", "HTML"] },
  { "name": "鈴木 健一", "department": "開発部", "skills": ["Python", "JavaScript", "SQL"] },
  { "name": "山田 明美", "department": "営業部", "skills": ["Excel", "PowerPoint", "SQL"] }
]`;

function runChallenge(): void {
  const cardsContainer = document.getElementById("cards") as HTMLDivElement;
  const allSkillsDisplay = document.getElementById("allSkills") as HTMLParagraphElement;

  cardsContainer.innerHTML = "";

  // 型定義
  type Employee = {
    name: string;
    department: string;
    skills: string[];
  };

  // JSON → 型付きデータ
  const employees: Employee[] = JSON.parse(employeesJson);

  const allSkills: string[] = [];

  for (let i: number = 0; i < employees.length; i++) {
    const emp: Employee = employees[i];

    const card: HTMLDivElement = document.createElement("div");
    card.className = "employee-card";

    const nameEl: HTMLHeadingElement = document.createElement("h3");
    nameEl.textContent = emp.name;

    const deptEl: HTMLParagraphElement = document.createElement("p");
    deptEl.textContent = "部署: " + emp.department;

    const skillsEl: HTMLParagraphElement = document.createElement("p");
    skillsEl.textContent = "スキル: " + emp.skills.join(", ");

    card.appendChild(nameEl);
    card.appendChild(deptEl);
    card.appendChild(skillsEl);

    cardsContainer.appendChild(card);

    // スキル収集
    for (let j: number = 0; j < emp.skills.length; j++) {
      allSkills.push(emp.skills[j]);
    }
  }

  // 重複削除
  const uniqueSkills: string[] = [...new Set(allSkills)];

  // 表示
  allSkillsDisplay.textContent =
    "全スキル（重複なし）: " + JSON.stringify(uniqueSkills);
}

// HTMLから呼び出す
(window as any).runChallenge = runChallenge;