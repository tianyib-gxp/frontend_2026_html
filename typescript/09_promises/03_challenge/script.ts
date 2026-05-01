// ─── 型定義を作ってください ─────────────────────────

// ヒント:
// token を持つオブジェクト
// type AuthResponse = ???

// ヒント:
// name, role, lastLogin を持つ
// type Profile = ???

// ─── 模擬API（型を付けてください） ───────────────────

function authenticate(
  username: string,
  password: string
) /* : Promise<AuthResponse> */ {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({ token: "abc-xyz-123" });
      } else {
        reject(new Error("認証失敗：ユーザー名またはパスワードが間違っています"));
      }
    }, 700);
  });
}

function fetchProfile(
  token: string
) /* : Promise<Profile> */ {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "abc-xyz-123") {
        resolve({
          name: "田中 太郎",
          role: "admin",
          lastLogin: "2025-06-01",
        });
      } else {
        reject(new Error("プロフィール取得失敗：無効なトークン"));
      }
    }, 600);
  });
}

// ─── ユーティリティ ──────────────────────────────

const logEl = document.getElementById("log") as HTMLUListElement;

function addLog(message: string): void {
  const li: HTMLLIElement = document.createElement("li");
  li.textContent = message;
  logEl.appendChild(li);
}

// ─── ここから実装 ──────────────────────────────

/**
 * =============================================
 * login 関数を完成させてください
 *
 * 条件:
 * - 引数に型を付ける
 * - 戻り値は Promise<void>
 * - try/catch を使う
 * - await を使って順番に処理する
 *
 * 手順:
 * 1. ログをリセット
 * 2. authenticate で token を取得
 * 3. fetchProfile でプロフィール取得
 * 4. 成功時:
 *    - 「ログイン成功」
 *    - 名前・role を表示
 * 5. エラー時:
 *    - エラーメッセージを表示
 * =============================================
 */

async function login(
  username: string,
  password: string
): Promise<void> {
  logEl.innerHTML = "";

  // ここに実装
}

// HTMLから呼び出す
(window as any).login = login;