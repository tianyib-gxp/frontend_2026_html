// クリック数を追跡する変数
let count = 0;

// ページ読み込み後にリスナーを登録
const btn = document.getElementById("countBtn");
const display = document.getElementById("countDisplay");

btn.addEventListener("click", () => {
  count++; // クリックごとに+1
  display.textContent = "クリック数: " + count;
});
