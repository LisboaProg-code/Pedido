const audio = document.getElementById('main-audio');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

// Função para Play/Pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.classList.replace('ri-play-circle-fill', 'ri-pause-circle-fill');
    } else {
        audio.pause();
        playBtn.classList.replace('ri-pause-circle-fill', 'ri-play-circle-fill');
    }
});

// Atualiza a barra de progresso e o tempo
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    
    // Atualiza largura da barra
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Formata tempo (Ex: 0:00)
    if (duration) {
        durationEl.innerText = formatTime(duration);
        currentTimeEl.innerText = formatTime(currentTime);
    }
});

// Função auxiliar para formatar segundos em Minutos:Segundos
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

function mostrarMensagem() {
  const card = document.getElementById('mensagem');
  
  // Se estiver usando browsers modernos, a View Transitions API faz o trabalho pesado:
  if (!document.startViewTransition) {
    card.classList.add('expanded');
    return;
  }

  document.startViewTransition(() => {
    card.classList.add('expanded');
  });
}

function closeCardMsg() {
  const card = document.getElementById('mensagem');
  document.startViewTransition(() => {
    card.classList.remove('expanded');
  });
}

/* ---------- */


let dataInicial = new Date("2025-09-02T00:00:00")

function verificarTempo(){

    let agora = new Date()

    let diferenca = agora - dataInicial

    let totalSegundos = Math.floor(diferenca / 1000)

    let anos = Math.floor(totalSegundos / (60*60*24*365))
    totalSegundos %= (60*60*24*365)

    let meses = Math.floor(totalSegundos / (60*60*24*30))
    totalSegundos %= (60*60*24*30)

    let dias = Math.floor(totalSegundos / (60*60*24))
    totalSegundos %= (60*60*24)

    let horas = Math.floor(totalSegundos / (60*60))
    totalSegundos %= (60*60)

    let minutos = Math.floor(totalSegundos / 60)

    let segundos = totalSegundos % 60

    document.getElementById("anoWeb").innerText = anos
    document.getElementById("mesWeb").innerText = meses
    document.getElementById("diasWeb").innerText = dias
    document.getElementById("horasWeb").innerText = horas
    document.getElementById("minutosWeb").innerText = minutos
    document.getElementById("segundosWeb").innerText = segundos
}

setInterval(verificarTempo, 1000)

/* --------- */

function expandStory() {
  const card = document.getElementById('foto1');
  const display = document.getElementById('display-foto');

  if(card.classList.contains("expanded")) return;

  // define a primeira imagem
  display.style.backgroundImage = `url(${listaFotos1[foto1Atual]})`;

  if (!document.startViewTransition) {
    card.classList.add('expanded');
    return;
  }

  document.startViewTransition(() => {
    card.classList.add('expanded');
  });
}

// Lista de fotos do seu álbum
const listaFotos1 = [
    'imgs/eu-e-meuamor.jpeg',
    'imgs/noises-na-escola.jpeg',
    'imgs/cineminha.jpeg',
    'imgs/nos2-em-ksa.jpeg'
];

let foto1Atual = 0;

function mudarFt1(direcao) {

    const display = document.getElementById('display-foto');
    
    foto1Atual += direcao;

    // Lógica de Loop que você já usava
    if (foto1Atual >= listaFotos1.length) foto1Atual = 0;
    if (foto1Atual < 0) foto1Atual = listaFotos1.length - 1;

    // Aplica a nova imagem no fundo
    display.style.backgroundImage = `url(${listaFotos1[foto1Atual]})`;
}

// Ajuste na função de fechar para o novo ID e evitar bugs
function closeCard(event) {
    if(event) event.stopPropagation();
    const card = document.getElementById('foto1');
    
    if (document.startViewTransition) {
        document.startViewTransition(() => card.classList.remove('expanded'));
    } else {
        card.classList.remove('expanded');
    }
}

/* ---story2-- */


function expandStory2() {
  const card = document.getElementById('foto2');
  const display = document.getElementById('display-foto2');

  // se já estiver expandido, não faz nada
  if(card.classList.contains("expanded")) return;

  display.style.backgroundImage = `url(${listaFotos2[foto2Atual]})`;
  
  // Se estiver usando browsers modernos, a View Transitions API faz o trabalho pesado:
  if (!document.startViewTransition) {
    card.classList.add('expanded');
    return;
  }

  document.startViewTransition(() => {
    card.classList.add('expanded');
  });
}

// Lista de fotos do seu álbum
const listaFotos2 = [
    'imgs/alien.jpeg',
    'imgs/extremos.jpeg',
    'imgs/palhaco2.jpeg',
    "imgs/nos-lampiao.jpeg"
];

let foto2Atual = 0;

function mudarFt2(direcao) {

    const display = document.getElementById('display-foto2');
    
    foto2Atual += direcao;

    // Lógica de Loop que você já usava
    if (foto2Atual >= listaFotos2.length) foto2Atual = 0;
    if (foto2Atual < 0) foto2Atual = listaFotos2.length - 1;

    // Aplica a nova imagem no fundo
    display.style.backgroundImage = `url(${listaFotos2[foto2Atual]})`;
}

// Ajuste na função de fechar para o novo ID e evitar bugs
function closeCard2(event) {
    if(event) event.stopPropagation();
    const card = document.getElementById('foto2');
    
    if (document.startViewTransition) {
        document.startViewTransition(() => card.classList.remove('expanded'));
    } else {
        card.classList.remove('expanded');
    }
}

/* --story3-- */

function expandStory3() {
  const card = document.getElementById('foto3');
  const display = document.getElementById('display-foto3');

  // se já estiver expandido, não faz nada
    if(card.classList.contains("expanded")) return;

    display.style.backgroundImage = `url(${listaFotos3[foto3Atual]})`;
  
  // Se estiver usando browsers modernos, a View Transitions API faz o trabalho pesado:
  if (!document.startViewTransition) {
    card.classList.add('expanded');
    return;
  }

  document.startViewTransition(() => {
    card.classList.add('expanded');
  });
}

let foto3Atual = 0;
const listaFotos3 = [
    'imgs/eu-e-meubem.jpeg',
    'imgs/eu-admirando-ela.jpeg',
    'imgs/nossas-primeiras-interacoes.jpeg',
    'imgs/alianca.jpeg'
];

function mudarFt3(direcao) {
    // Não precisamos de event.stopPropagation() aqui se as áreas 
    // de clique estiverem configuradas corretamente no CSS.

    const display = document.getElementById('display-foto3');
    
    foto3Atual += direcao;

    // Lógica de Loop que você já usava
    if (foto3Atual >= listaFotos3.length) foto3Atual = 0;
    if (foto3Atual < 0) foto3Atual = listaFotos3.length - 1;

    // Aplica a nova imagem no fundo
    display.style.backgroundImage = `url(${listaFotos3[foto3Atual]})`;
}

// Ajuste na função de fechar para o novo ID e evitar bugs
function closeCard3(event) {
    if(event) event.stopPropagation();
    const card = document.getElementById('foto3');
    
    if (document.startViewTransition) {
        document.startViewTransition(() => card.classList.remove('expanded'));
    } else {
        card.classList.remove('expanded');
    }
}

/* --------- */


function criarCoracao() {
  const container = document.getElementById("hearts-container");

  if (!container) {
    console.log("container não encontrado");
    return;
  }

  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = "♥️";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (Math.random() * 5 + 10) + "px";
  heart.style.animationDuration = (Math.random() * 5 + 3) + "s";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// só cria corações quando o wrapped estiver aberto
let intervalo;

function iniciarCoracoes() {
  intervalo = setInterval(criarCoracao, 500);
}

function pararCoracoes() {
  clearInterval(intervalo);
}

let slideAtual = 0;

function wrapped() {
    const container = document.querySelector(".conteiner_wrapped");
    const wrappedFull = document.querySelector(".wrapped-full");
    
    // PRIMEIRO: Mostra o container
    container.classList.add("expanded");
    wrappedFull.style.display = "flex"; // Mudei de block para flex para alinhar com seu CSS

    // SEGUNDO: Inicia as animações e barras (agora os elementos existem no DOM visível)
    iniciarCoracoes();
    
    // Pequeno delay para garantir que o navegador renderizou os slides
    setTimeout(() => {
        inicializarBarrasProgresso();
    }, 50);

    const wrappedElement = document.getElementById("wrapped");
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            wrappedElement.classList.add("expanded");
        });
    } else {
        wrappedElement.classList.add("expanded");
    }
}

function closeWrapped(event) {
    if (event) event.stopPropagation();

    const card = document.getElementById('wrapped');
    const slides = document.getElementById("slides");

    if (document.startViewTransition) {
        document.startViewTransition(() => {
            card.classList.remove('expanded');
        });
    } else {
        card.classList.remove('expanded');
    }

    document.querySelector(".wrapped-full").style.display = "none";
    pararCoracoes();
    
    // RESETA O SLIDE
    slideAtual = 0;

    // 🔥 ESSA LINHA É O QUE FALTAVA
    if (slides) {
        slides.style.transform = `translateX(0vw)`;
    }

    // (opcional) resetar barras também
    atualizarBarras();
}

function mudarSlide(direcao) {
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    slideAtual += direcao;

    // Travas de segurança para não passar do limite
    if (slideAtual >= totalSlides) slideAtual = totalSlides - 1;
    if (slideAtual < 0) slideAtual = 0;

    slides.style.transform = `translateX(-${slideAtual * 100}vw)`;

    // 3. Atualiza qual barra deve estar preenchida
    atualizarBarras();
}

// --- FUNÇÕES AUXILIARES PARA AS BARRAS ---

function inicializarBarrasProgresso() {
    const containerBarras = document.getElementById('progress-bars');
    const slidesTrack = document.getElementById("slides");
    
    if (!slidesTrack) return; // Segurança

    const totalSlides = slidesTrack.children.length;
    console.log("Total de slides encontrados:", totalSlides); // Verifique o console (F12)
    
    containerBarras.innerHTML = ''; 

    for (let i = 0; i < totalSlides; i++) {
        const bg = document.createElement('div');
        bg.className = 'progress-bar-bg';
        
        const fill = document.createElement('div');
        fill.className = 'progress-bar-fill';
        fill.id = `fill-${i}`;
        
        bg.appendChild(fill);
        containerBarras.appendChild(bg);
    }
    atualizarBarras();
}

function atualizarBarras() {
    const slidesTrack = document.getElementById("slides");
    if (!slidesTrack) return;

    const totalSlides = slidesTrack.children.length;

    for (let i = 0; i < totalSlides; i++) {
        const fill = document.getElementById(`fill-${i}`);
        if (!fill) continue;

        if (i < slideAtual) {
            // Slides que já passaram: 100%
            fill.style.width = '100%';
            fill.classList.add('finished');
        } 
        else if (i === slideAtual) {
            // SE FOR O ÚLTIMO SLIDE: Fica pintado (100%)
            // SE NÃO FOR O ÚLTIMO: Fica em 0% (esperando carregar ou clique)
            if (slideAtual === totalSlides - 1) {
                fill.style.width = '100%';
                fill.classList.add('finished');
            } else {
                fill.style.width = '0%';
                fill.classList.remove('finished');
            }
        } 
        else {
            // Slides futuros: 0%
            fill.style.width = '0%';
            fill.classList.remove('finished');
        }
    }
}
