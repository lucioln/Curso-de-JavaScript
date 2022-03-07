// function funcao() {
//     console.log('Oie');
//     console.log(arguments);
//     console.log(arguments[0])
// }
// funcao('Valor', 1, 2, 3, 4, 5);
// retorna : 
// Oie
// [Arguments] { '0': 'Valor', '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }
// Valor

//utilizando arguments

// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }
//        a  b  c  ?  ?  ?  ?
// funcao(1, 2, 3, 4, 5, 6, 7);

// apenas as funções definidas com a palavra function
//sustenta todos os argumentos enviados (arguments)


// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2, undefined, 20);

// function funcao({ nome, idade, sobrenome }) {
//     console.log(nome, idade, sobrenome)
// }
// funcao({ nome: 'Lucio', sobrenome: 'Noleto', idade: 22 });


// rest operator (...):

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

// rest operator sempre deve ser o ultimo argumento (obviamente)

//como usar arguments em arrow function?
const argsEmArrow = (...args) => {
    console.log(args);
}

argsEmArrow(1, 2, 3, 4, 5, "arrow", "é melhor")
