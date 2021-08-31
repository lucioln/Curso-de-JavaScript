// Escreva uma função que recebe um numero e
// retorne o seguite:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz 
// Numero nao é divisivel por 3 e 5 = Retorna o próprio numero
// Checar se o número é realmente um número
// Use a função com Números de 0 a 100
function fizzBuzz(i) {
    return (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" :
        i % 3 === 0 ? 'Fizz' :
            i % 5 === 0 ? 'Buzz' :
                (i % 3 != 0 && i % 5 != 0) ? i :
                    isNaN(i);
}
for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
}