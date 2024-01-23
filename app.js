let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoIntentos = 5;
let maximoIntentos = 5;


function asignarTextoElemento(elemento,texto){
    let elementoHTLM = document.querySelector(elemento);
    elementoHTLM.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'} el numero era ${numeroDeUsuario}`); 
        limpiarCaja();
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        //EL usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximoIntentos) {
        asignarTextoElemento('p',`Has llegado al maximo de ${numeroMaximoIntentos} Juegos`);
    } else{
        //Si el numero secreto esta generado en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Kevincillo');
    asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo} :`);
    numeroSecreto=generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

