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

// Randomiza o texto do clipboard ao clicar
function attachClipboardRandomizer() {
    const copyBtn = document.querySelector('.copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', randomizeClipboardText);
    }
}

// Animação de rolagem do texto
function startTextAnimation() {
    const elements = document.querySelectorAll('.slide-text > *');
    if (elements.length) {
        anime({
            targets: elements,
            translateX: '-100%',
            duration: 100000,
            easing: 'linear',
            loop: true,
        });
    }
}

// Alterna opacidade aleatória nas imagens
function toggleOpacityRandomly() {
    const totalImages = 30;
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    const targetElement = document.querySelector(`.img-${randomIndex}`);
    const allImages = document.querySelectorAll('.image');

    allImages.forEach((image) => {
        image.style.setProperty('opacity', '.1', 'important');
    });

    if (targetElement) {
        targetElement.style.setProperty('opacity', '1', 'important');
    }
}

// Inicia a alternância de opacidade
function startOpacityToggle() {
    setInterval(toggleOpacityRandomly, 1500);
}

// Obtém o telefone da URL
function getPhoneFromURL() {
    const query = window.location.search;
    return query.startsWith('?') ? query.substring(1) : '';
}

// Carrega os dados do JSON
async function loadGuestData() {
    try {
        const response = await fetch('guests.json');
        if (!response.ok) throw new Error('Erro ao carregar os dados do JSON.');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Encontra o nome do convidado pelo telefone
function getGuestNameByPhone(guests, phone) {
    const guest = guests.find((item) => item.phone === phone);
    return guest ? guest.name : 'Convidadx';
}

// Exibe o nome do convidado no HTML
async function displayGuestName() {
    const phone = getPhoneFromURL();
    const guests = await loadGuestData();
    const guestName = getGuestNameByPhone(guests, phone);

    const guestElement = document.querySelector('#guests');
    if (guestElement) {
        const typewriter = new Typewriter(guestElement, {
            loop: false,
            delay: 50,
            cursor: '',
        });

        typewriter
            .pauseFor(500)
            .typeString(`<p>Olá, ${guestName}</p>`)
            .typeString('<p>Bora confirmar a presença</p>')
            .typeString('<p>no nosso casamento!</p>')
            .start();
    }
}

// Adiciona rolagem suave ao formulário
function setupSmoothScroll() {
    const button = document.querySelector('.button');
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('#forms')?.scrollIntoView({ behavior: 'smooth' });
        });
    }
}


// adiciona icones no título
var app = document.getElementById('shuffle');
var typewriter = new Typewriter(shuffle, {
  loop: true,
  delay: 0,
  cursor: '',
});

typewriter
  .typeString('&')
  .pauseFor(50000)
  .deleteChars(1)
  .typeString('<span class="icon-bong e"></span>')
  .pauseFor(5000)
  .deleteChars(1)
  .typeString('&')
  .pauseFor(5000)
  .deleteChars(1)
  .typeString('<span class="icon-joint e"></span>')
  .pauseFor(5000)
  .deleteChars(1)
  .typeString('&')
  .pauseFor(5000)
  .deleteChars(1)
  .typeString('<span class="icon-hemp e"></span>')
  .pauseFor(5000)
  .deleteChars(1)
  .typeString('&')
  .pauseFor(5000)
  .start();





// Inicialização do aplicativo
window.addEventListener('load', () => {
    initializeClipboardJS();
    attachClipboardRandomizer();
    startTextAnimation();
    startOpacityToggle();
    displayGuestName();
    setupSmoothScroll();
});

