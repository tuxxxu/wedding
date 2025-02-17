// Typewriter Effect
const guestsElement = document.getElementById("guests");

const typewriter = new Typewriter(guestsElement, {
  loop: false,
});

typewriter
  .typeString("Acessos confirmados para...")
  .pauseFor(2000)
  .deleteChars(27)
  .typeString("Pessoa convidada")
  .pauseFor(1000)
  .start();

// Random QR Code
const randomNumber = Math.floor(Math.random() * 10) + 1;
document.getElementById('qrcodeImg').src = `qrcode/qrcode0${randomNumber}.png`;

// Função para randomizar o conteúdo do clipboard ao clicar
function randomizeClipboardText() {
  const copyBtn = document.querySelector('.copy-btn');
  if (!copyBtn) return;

  const options = ['f65e527d-f98e-421b-90b9-cd25780fabb8', 'd6d2c6c5-8101-4e49-b873-92b278600da1'];
  const randomText = options[Math.floor(Math.random() * options.length)];
  copyBtn.setAttribute('data-clipboard-text', randomText);
}

// Inicializa o ClipboardJS com lógica de sucesso e erro
function initializeClipboardJS() {
  const clipboard = new ClipboardJS('.copy-btn');

  clipboard.on('success', (e) => {
    const button = e.trigger;
    const originalText = button.textContent;

    button.textContent = 'Pix copiado com sucesso 🤑';
    setTimeout(() => (button.textContent = originalText), 1000);

    e.clearSelection();
  });

  clipboard.on('error', (e) => {
    console.error('Erro ao copiar:', e.action);
  });
}

// Randomiza o texto do clipboard ao clicar E inicializa o ClipboardJS
function setupClipboard() {
  const copyBtn = document.querySelector('.copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', randomizeClipboardText);
  }
  initializeClipboardJS();
}

// Garantir que tudo rode depois do carregamento
document.addEventListener('DOMContentLoaded', function () {
  setupClipboard();
});
