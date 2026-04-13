function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// クリックイベント
const colorBtn = document.getElementById("colorBtn");
const colorMsg = document.getElementById("colorMsg");

colorBtn.addEventListener("click", () => {
  const r = random(255), g = random(255), b = random(255);
  document.body.style.backgroundColor = `rgb(${r} ${g} ${b})`;
  colorMsg.textContent = `現在の色: rgb(${r}, ${g}, ${b})`;
});

// キーdownイベント
const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");

keyInput.addEventListener("keydown", (event) => {
  keyOutput.textContent = `押したキー: "${event.key}"`;
});
