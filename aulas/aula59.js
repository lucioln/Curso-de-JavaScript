const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
//     if (numero === 2) {
//         continue;
//     }
//     console.log(numero);
// }
let i = 0;

//exibe números ímpares de 1 a 100
while (i <= 100) {
    if ((i % 2) === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++
}