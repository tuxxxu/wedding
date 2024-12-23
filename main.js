// Função para randomizar o conteúdo do clipboard ao clicar
function randomizeClipboardText() {
    const copyBtn = document.querySelector('.copy-btn');
    if (copyBtn) {
        const options = ['f65e527d-f98e-421b-90b9-cd25780fabb8', 'd6d2c6c5-8101-4e49-b873-92b278600da1'];
        const randomText = options[Math.floor(Math.random() * options.length)];
        copyBtn.setAttribute('data-clipboard-text', randomText);
    }
}

// Inicializa o ClipboardJS e configura a lógica de sucesso e erro
function initializeClipboardJS() {
    const clipboard = new ClipboardJS('.copy-btn');
    clipboard.on('success', function (e) {
        const button = e.trigger;
        const originalText = button.textContent;  // Armazena o texto original do botão

        // Atualiza o texto do botão para o feedback de sucesso
        button.textContent = 'Pix copiado com sucesso 🤑';

        // Após 1 segundo, volta o texto para o original
        setTimeout(() => {
            button.textContent = originalText;
        }, 1000);

        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        console.error('Erro ao copiar:', e.action);
    });
}

// Esperar que a página carregue completamente
window.addEventListener('load', function () {
    initializeClipboardJS();  // Inicializa o ClipboardJS apenas uma vez
});

// Adiciona um evento de clique ao botão para randomizar o clipboard
document.querySelector('.copy-btn').addEventListener('click', function() {
    randomizeClipboardText();  // Randomiza o conteúdo do clipboard a cada clique
});

// Top animate
let elt = document.querySelectorAll('.slide-text > *');
anime({
    targets: elt,
    translateX: '-100%',
    duration: 100000,
    easing: 'linear',
    loop: true
});

// Random opacity
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

// URL para carregar o JSON
const guestsDataUrl = 'guests.json';

// Função para obter o número de telefone da URL
function getPhoneFromURL() {
    const query = window.location.search;
    return query.startsWith("?") ? query.substring(1) : ""; // Remove o "?" e retorna o número
}

// Função para carregar os dados do JSON
async function loadGuestData() {
    try {
        const response = await fetch(guestsDataUrl);
        if (!response.ok) throw new Error("Erro ao carregar os dados do JSON.");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Função para encontrar o nome no JSON pelo telefone
function getGuestNameByPhone(guests, phone) {
    const guest = guests.find(item => item.phone === phone);
    return guest ? guest.name : "Convidadx";
}

// Função principal para exibir o nome no HTML
async function displayGuestName() {
    const phone = getPhoneFromURL(); // Obtém o telefone da URL
    const guests = await loadGuestData(); // Carrega os dados do JSON
    const guestName = getGuestNameByPhone(guests, phone); // Encontra o nome correspondente

    // Atualiza o HTML com o nome do convidado
    const guestElement = document.querySelector('#guests');
    if (guestElement) {
        // Adiciona o texto ao elemento e inicializa o efeito Typewriter
        const typewriter = new Typewriter(guestElement,{
            loop: false,
            delay: 50,
            cursor: ""
        });
        
        typewriter
        .pauseFor(500)
        .typeString('<p>Olá, '+ guestName + '</p>')
        .typeString('<p>Bora confirmar a presença</p>')
        .pauseFor(500)
        .typeString('<p>no nosso casamento!</p>')
        .start();
    }
}

// Executa a função para exibir o nome do convidado
displayGuestName();


// scroll

document.querySelector('.button').addEventListener('click', function (e) {
    e.preventDefault(); // Evita o comportamento padrão do link
    document.querySelector('#forms').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
  