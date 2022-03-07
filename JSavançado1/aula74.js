// Funções imediatas - IIFE -> Immediately Invoked function expression

// function qualquerCoisa() {
//     console.log(11123455)
// }
// qualquerCoisa();

(function () {
    const nome = 'Lucio Noleto';
    console.log(nome);
})();
const nome = 'qualquer coisa'; //nao sera exibido

//As IIFE podem ser utilizadas para proteger do excopo global

(function (idade, peso, altura) {
    console.log('idade:', idade);
    console.log('peso:', peso);
    console.log('altura:', altura);
})(22, 87, 1.75);