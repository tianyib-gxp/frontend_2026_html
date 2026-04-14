const inputName = document.getElementById('username') as HTMLInputElement;
const button = document.getElementById('greetBtn') as HTMLButtonElement;
const resultDisplay = document.getElementById('response') as HTMLParagraphElement;

const generateMessage = (name: string): string => {
  if (name.trim() === '') {
    return 'Veuillez entrer un nom valide.';
  }
  return `おめでとうございます、 ${name} ! TypeScriptを使えます！`;
};

button.addEventListener('click', () => {
  const message: string = generateMessage(inputName.value);
  
  if (resultDisplay) {
    resultDisplay.innerText = message;
    resultDisplay.style.color = 'green';
    resultDisplay.style.fontWeight = 'bold';
  }
});
