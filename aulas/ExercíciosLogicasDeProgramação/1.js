//Escreva uma função que recebe 2 números e retorne o maior deles

function NumeroMaior(First, Second) {
    if (First > Second) {
        return 'O número maior é: ' + First;
    } if (Second > First) {
        return 'O número maior é: ' + Second;
    } else {
        return 'Os Números são iguais';
    }
}

console.log(NumeroMaior(1, 2));

//Código do profesor
const NumeroMaior2 = (x, y) => x > y ? x : y;

console.log(NumeroMaior2(1, 2))