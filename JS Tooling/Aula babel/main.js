class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falaOla(nome, sobrenome){
        console.log(`${this.nome} ${this.sobrenome} diz olá`);
    }
}

const p1 = new Pessoa('lúcio', 'noleto');
