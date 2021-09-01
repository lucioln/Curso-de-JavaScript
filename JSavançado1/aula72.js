//Closures: é a habilidade que a função tem em acessar seu escopo lexo
function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const f1 = retornaFuncao('Lucio');
const f2 = retornaFuncao('Noleto');
console.dir(f1);
console.dir(f2);
console.log(f1(), f2())