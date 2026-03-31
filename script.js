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

function closeCard() {
  const card = document.getElementById('mensagem');
  document.startViewTransition(() => {
    card.classList.remove('expanded');
  });
}

/* ---------- */


let ano = 0
let meses = 0
let dia = 208

function verificarTempo(){

    let data = new Date()

    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    if(hora == 0 && min == 0 && seg == 0){
        dia += 1
    }

    if(meses == 12){
        meses = 0
        ano += 1
    }

    if(dia > 30){
        meses += 1
        dia -= 30
    }

    document.getElementById("anoWeb").innerText = ano
    document.getElementById("mesWeb").innerText = meses
    document.getElementById("diasWeb").innerText = dia
    document.getElementById("horasWeb").innerText = hora
    document.getElementById("minutosWeb").innerText = min
    document.getElementById("segundosWeb").innerText = seg
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
    'imgs/hero2.jpeg',
    'imgs/outra-foto.jpg',
    'imgs/mais-uma.png'
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
    'imgs/hero2.jpeg',
    'imgs/outra-foto.jpg',
    'imgs/mais-uma.png'
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

function closeCard2() {
  const card = document.getElementById('foto3');
  document.startViewTransition(() => {
    card.classList.remove('expanded');
  });
}

// Lista de fotos do seu álbum
const listaFotos3 = [
    'imgs/hero2.jpeg',
    'imgs/outra-foto.jpg',
    'imgs/mais-uma.png'
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