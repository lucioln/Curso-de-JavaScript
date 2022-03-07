//return 
// retorna um valor
//  Termina a função

// function criaPessoa(nome, cpf) {
//     return {
//         nome: nome,
//         cpf: cpf
//     }
// }
// p1 = criaPessoa('lucio', 610);
// console.log(p1)
// console.log('cpf é do tipo:', typeof p1.cpf)

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo'));

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function multiplicacao(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));