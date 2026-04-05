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
  
  // Se estiver usando browsers modernos, a View Transitions API faz o trabalho pesado:
  if (!document.startViewTransition) {
    card.classList.add('expanded');
    return;
  }

  document.startViewTransition(() => {
    card.classList.add('expanded');
  });
}

function closeCard() {
  const card = document.getElementById('foto1');
  document.startViewTransition(() => {
    card.classList.remove('expanded');
  });
}

// Lista de fotos do seu álbum
const listaFotos = [
    'imgs/eu-e-meuamor.jpeg',
    'imgs/noises-na-escola.jpeg',
    'imgs/cineminha.jpeg'
];

let fotoAtual = 0;

function mudarFoto(direcao, event) {
    // Impede que o clique na seta feche o card ou dispare o expandStory novamente
    event.stopPropagation();

    const display = document.getElementById('display-foto');
    
    // Atualiza o index
    fotoAtual += direcao;

    // Loop: se chegar no fim volta pro começo, se for pra trás do zero vai pro fim
    if (fotoAtual >= listaFotos.length) fotoAtual = 0;
    if (fotoAtual < 0) fotoAtual = listaFotos.length - 1;

    // Aplica a nova imagem
    display.style.backgroundImage = `url(${listaFotos[fotoAtual]})`;
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
  
  // Se estiver usando browsers modernos, a View Transitions API faz o trabalho pesado:
  if (!document.startViewTransition) {
    card.classList.add('expanded');
    return;
  }

  document.startViewTransition(() => {
    card.classList.add('expanded');
  });
}

function closeCard2() {
  const card = document.getElementById('foto2');
  document.startViewTransition(() => {
    card.classList.remove('expanded');
  });
}

// Lista de fotos do seu álbum
const listaFotos2 = [
    'imgs/alien.jpeg',
    'imgs/extremos.jpeg',
    'imgs/palhaco2.jpeg'
];

let foto2Atual = 0;

function mudarFoto2(direcao, event) {
    // Impede que o clique na seta feche o card ou dispare o expandStory novamente
    event.stopPropagation();

    const display = document.getElementById('display-foto2');
    
    // Atualiza o index
    foto2Atual += direcao;

    // Loop: se chegar no fim volta pro começo, se for pra trás do zero vai pro fim
    if (foto2Atual >= listaFotos2.length) foto2Atual = 0;
    if (foto2Atual < 0) foto2Atual = listaFotos2.length - 1;

    // Aplica a nova imagem
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
  
  // Se estiver usando browsers modernos, a View Transitions API faz o trabalho pesado:
  if (!document.startViewTransition) {
    card.classList.add('expanded');
    return;
  }

  document.startViewTransition(() => {
    card.classList.add('expanded');
  });
}

function closeCard3() {
  const card = document.getElementById('foto3');
  document.startViewTransition(() => {
    card.classList.remove('expanded');
  });
}

// Lista de fotos do seu álbum
const listaFotos3 = [
    'imgs/eu-e-meubem.jpeg',
    'imgs/eu-admirando-ela.jpeg',
    'imgs/nossas-primeiras-interacoes.jpeg'
];

let foto3Atual = 0;

function mudarFoto3(direcao, event) {
    // Impede que o clique na seta feche o card ou dispare o expandStory novamente
    event.stopPropagation();

    const display = document.getElementById('display-foto3');
    
    // Atualiza o index
    foto3Atual += direcao;

    // Loop: se chegar no fim volta pro começo, se for pra trás do zero vai pro fim
    if (foto3Atual >= listaFotos3.length) foto3Atual = 0;
    if (foto3Atual < 0) foto3Atual = listaFotos3.length - 1;

    // Aplica a nova imagem
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

function wrapped(){
  const container = document.querySelector(".conteiner_wrapped")
  container.classList.add("expanded")

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