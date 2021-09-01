//funções construtoras -> objetos
//função fabrica  -> objetos
// Construtora -> Sempre iniciar os nomes com Maiusculo 

//Factory = criaPessoa(){};
//Construtora = Pessoa(new){}

function Pessoa(nome, sobrenome) {

    const ID = 123456;//atributos privados

    const metodoInterno = function () {//metodos privados


    };

    this.nome = nome; //atributos ou métodos públicos
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log('Meu nome é:', this.nome);
    };
}

const p1 = new Pessoa('Lucio', 'Noleto');
const p2 = new Pessoa('Tacio', 'Noleto');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();