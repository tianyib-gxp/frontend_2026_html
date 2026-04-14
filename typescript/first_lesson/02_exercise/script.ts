const inputName = document.getElementById('username') as HTMLInputElement;
const button = document.getElementById('greetBtn') as HTMLButtonElement;
const resultDisplay = document.getElementById('response') as HTMLParagraphElement;

const generateMessage = (name: string): string => {
  if (name.trim() === '') {
    return 'Veuillez entrer un nom valide.';
  }
  return `Félicitations, ${name} ! Votre environnement TypeScript fonctionne.`;
};

button.addEventListener('click', () => {
  const message: string = generateMessage(inputName.value);
  
  if (resultDisplay) {
    resultDisplay.innerText = message;
    resultDisplay.style.color = 'green';
    resultDisplay.style.fontWeight = 'bold';
  }
});

// TEST POUR TON COLLÈGUE :
// Si tu enlèves les ":" ou si tu essaies de passer un nombre à generateMessage(),
// ESLint et TypeScript devraient souligner l'erreur en rouge pour vous deux.