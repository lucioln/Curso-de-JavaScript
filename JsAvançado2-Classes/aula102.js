class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }
    comer(){
        console.log(`${this.nome} está comendo`);
    }
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Lúcio', 'Noleto');

//Fazendo o mesmo com função construtora

function Pessoa2 (nome, sobrenome){
    this.nome = nome ;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
  console.log(`${this.nome} está falando`);
};

const p2 = new Pessoa2('Samantha', 'Araujo');