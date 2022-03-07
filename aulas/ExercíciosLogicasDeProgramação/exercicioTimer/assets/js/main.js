const time = document.querySelector('.onTime');
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const clearButton = document.querySelector('.clear');

//Construção do Objeto Date Inicial!!
const tempo = new Date(0, 0, 0, 0, 0, 0, 0);
let segundos = 0;
let minutos = 0;
let horas = 0;
timer = 0;
function cronometro() {
    timer = setInterval(function () {
        if (segundos > 60) {
            minutos++;
            segundos = 1;
        }
        if (minutos > 60) {
            horas++;
            if (horas > 24) {
                horas = 0;
            }
            minutos = 0;
        }
        segundos++;
        tempo.setHours(horas);
        tempo.setMinutes(minutos);
        tempo.setSeconds(segundos);
        time.innerHTML = tempo.toLocaleTimeString('pt-BR', {
            timeHours12: false
        })
    }, 1000);
}

document.addEventListener('click', function (e) {
    const elemento = e.target;
    if (elemento.classList.contains('clear')) {
        clearInterval(timer);
        time.innerHTML = "00:00:00";
        segundos = 0;
        minutos = 0;
        horas = 0;
    }
    if (elemento.classList.contains('play')) {
        clearInterval(timer);
        cronometro();
    }
    if (elemento.classList.contains('pause')) {
        clearInterval(timer);
    }

})

// playButton.addEventListener('click', function (event) { //Evento de start
//     clearInterval(timer);
//     cronometro();
//     pauseButton.addEventListener('click', function (event) { // Evento para pausar
//         clearInterval(timer);
//     })
//     clearButton.addEventListener('click', function (event) { // Evento para limpar
//         clearInterval(timer);
//         time.innerHTML = "00:00:00";
//         segundos = 0;
//         minutos = 0;
//         horas = 0;
//     })

// })