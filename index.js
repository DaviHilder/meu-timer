const timer = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;
let funcionando = false

function tick() {
    timer.innerHTML = doiscaracteres(horas)+':'+doiscaracteres(minutos)+':'+doiscaracteres(segundos);
    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
        console.log('um minuto se passou')
    }
    if (minutos >= 60) {
        minutos = 0;
        horas++;
        console.log('uma hora se passou');
    }
}
function doiscaracteres(n){
    return n < 10 ? '0' + n : n;
}


iniciar.addEventListener('click', () => {
    if (!funcionando) 
        {console.log('timer iniciado')
        funcionando = true
        tick()
        intervalo = setInterval(tick, 1000)}
})

pausar.addEventListener('click', () => {
    console.log('pausado');
    clearInterval(intervalo);
    funcionando = false
})

zerar.addEventListener('click', (event) => {
    console.log('zerado');
    funcionando = false
    segundos = 0;
    minutos = 0;
    horas = 0;
    clearInterval(intervalo);
    timer.innerHTML = '00:00:00'
})