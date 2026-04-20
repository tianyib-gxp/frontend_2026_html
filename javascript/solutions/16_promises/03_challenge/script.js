// ─── 模擬API（変更不要） ─────────────────────────────────────

function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        resolve({ token: 'abc-xyz-123' });
      } else {
        reject(
          new Error('認証失敗：ユーザー名またはパスワードが間違っています'),
        );
      }
    }, 700);
  });
}

function fetchProfile(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === 'abc-xyz-123') {
        resolve({ name: '田中 太郎', role: 'admin', lastLogin: '2025-06-01' });
      } else {
        reject(new Error('プロフィール取得失敗：無効なトークン'));
      }
    }, 600);
  });
}

// ─── ユーティリティ（変更不要） ──────────────────────────────

const logEl = document.getElementById('log');

function addLog(message) {
  const li = document.createElement('li');
  li.textContent = message;
  logEl.appendChild(li);
}

// ─── ここからコードを書いてください ─────────────────────────
// async 関数 login(username, password) を実装してください
// 手順:
//   1. logEl.innerHTML = ""; でログをリセット
//   2. await authenticate(username, password) でトークンを取得
//   3. await fetchProfile(token) でプロフィールを取得
//   4. addLog(...) で「ログイン成功」とプロフィール情報を表示
//   5. catch (e) で addLog(e.message) を使いエラーを表示

async function login(username, password) {
  logEl.innerHTML = '';

  try {
    // authenticate が成功すると token を含むオブジェクトが返る
    const { token } = await authenticate(username, password);
    addLog('認証成功…トークン取得');

    // token を使ってプロフィールを取得
    const profile = await fetchProfile(token);
    addLog('ログイン成功！');
    addLog('名前: ' + profile.name);
    addLog('ロール: ' + profile.role);
    addLog('最終ログイン: ' + profile.lastLogin);
  } catch (e) {
    // authenticate または fetchProfile のエラーをまとめて処理
    addLog('❌ ' + e.message);
  }
}
