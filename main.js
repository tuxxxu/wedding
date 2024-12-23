function randomizeClipboardText() {
    const copyBtn = document.querySelector('.copy-btn');
    const options = ['f65e527d-f98e-421b-90b9-cd25780fabb8', 'd6d2c6c5-8101-4e49-b873-92b278600da1'];
    const randomText = options[Math.floor(Math.random() * options.length)];
    copyBtn.setAttribute('data-clipboard-text', randomText);
}
window.onload = randomizeClipboardText;
const clipboard = new ClipboardJS('.copy-btn');
clipboard.on('success', function (e) {
    const button = e.trigger;
    const originalText = button.textContent;
    button.textContent = 'Pix copiado com sucesso 🤑';
    setTimeout(() => {
        button.textContent = originalText;
    }, 1000);
    e.clearSelection();
});
clipboard.on('error', function (e) {
    console.error('Erro ao copiar:', e.action);
});
let elt = document.querySelectorAll('.slide-text > *');
anime({
    targets: elt,
    translateX: '-100%',
    duration: 100000,
    easing: 'linear',
    loop: true
});
function toggleOpacityRandomly() {
    const totalImages = 30; 
    const randomIndex = Math.floor(Math.random() * totalImages) + 1; 
    const targetElement = document.querySelector(`.img-${randomIndex}`);

    const allImages = document.querySelectorAll('.image');
    allImages.forEach(image => {
        image.style.opacity = '.1'; 
        image.style.setProperty('opacity', '.1', 'important');
    });

    targetElement.style.opacity = '1';
    targetElement.style.setProperty('opacity', '1', 'important');
}

setInterval(toggleOpacityRandomly, 1500);

// Função para inicializar o efeito de máquina de escrever
function initTypewriterEffect() {
    const guestsElement = document.querySelector('.guests');
    const typewriter = new Typewriter(guestsElement, {
        loop: false,
        delay: 75,
        cursor: "" // Desativa o cursor
    });

    typewriter
        .typeString('<p>Olá, Giovana e Gustavo</p>')
        .pauseFor(500)
        .typeString('<p>Bora confirmar a presença</p>')
        .pauseFor(500)
        .typeString('<p>no nosso casamento!</p>')
        .start();
}

// Inicializa o efeito quando a página carregar
window.onload = function () {
    randomizeClipboardText(); // Chama a função do Clipboard
    initTypewriterEffect();  // Inicia o efeito de máquina de escrever
};
