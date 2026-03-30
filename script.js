let conteiner = document.getElementById("conteiner_mensagem")
let mensagem = document.getElementById("mensagem")
let button = document.getElementById("button")
let restoMensagem = document.getElementById("letra")

/* function mostrarMensagem(){
    

} */


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