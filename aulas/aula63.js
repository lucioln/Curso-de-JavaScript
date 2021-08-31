// //Gerando Erros
// try {
//     console(naoExito);
// } catch (error) {
//     console.log('Ocorreu um ERRO : naoExisto nao existe.')
//     console.log(error);// Nunca fazer isso, pois é inseguro mostrar o erro ao usuário final.
// }


function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new Error('x e y precisam ser numeros!');
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2))
} catch (error) {
    //console.log(error);//quando ocorrer um erro irá motrar o throw (Nao exiba ao usuário)
}
