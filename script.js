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
    'imgs/cineminha.jpeg'
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
    'imgs/palhaco2.jpeg'
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
    'imgs/nossas-primeiras-interacoes.jpeg'
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

function wrapped(){
  const container = document.querySelector(".conteiner_wrapped")
  container.classList.add("expanded")
  document.querySelector(".wrapped-full").style.display = "block";
  iniciarCoracoes();

  const wrapped = document.getElementById("wrapped");

    if(!document.startViewTransition){
        wrapped.classList.add("expanded");
        return;
    }

    document.startViewTransition(()=>{
        wrapped.classList.add("expanded");
    });


}

function closeWrapped(event) {
    if(event) event.stopPropagation();

    const card = document.getElementById('wrapped');

    if (document.startViewTransition) {
        document.startViewTransition(() => {
            card.classList.remove('expanded');
        });
    } else {
        card.classList.remove('expanded');
    }

    document.querySelector(".wrapped-full").style.display = "none";
    pararCoracoes();
}

let slideAtual = 0;

function mudarSlide(direcao){

    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    slideAtual += direcao;

    if(slideAtual >= totalSlides) slideAtual = totalSlides - 1;
    if(slideAtual < 0) slideAtual = 0;

    slides.style.transform = `translateX(-${slideAtual * 100}vw)`;
}