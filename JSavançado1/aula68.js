//Declaração de função (Function hoisting = sempre a function ira ser elevada ao 
//topo do arquivo, podendos ser executada antes de sua criação)
falaOi(); //exemplo 
function falaOi() {
    console.log('Oi,');
}

// Funções são First-class objects  (podem ser tratadas como um dado)
// exemplo : 
const nome = function () {
    console.log('Lucio')
};

function executaFuncao(funcao) {
    console.log("hello,");
    funcao();
}


//Arrow function (declaração de funcao)
//todas são consideradas First-Class Objects
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}

executaFuncao(funcaoArrow);

//Dentro de um objeto
const obj = {
    // falar: function () {
    //     console.log('estou falando...');
    // }
    falar() {
        console.log('estou falando...');
    }
}

obj.falar();