//Factory Functions 

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'nada') { //metodo de factory function
            return `${this.nome} está falando sobre ${assunto}`;
        },

        altura: altura,
        peso: peso,
        //Getters
        get imc() { // o Get faz com que o JavaScript considere a função um atributo qualquer
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}
const p1 = criaPessoa('Tacio', 'Noleto', 1.75, 86);
p1.nomeCompleto = 'Lucio Lima Noleto';
// console.log(p1.fala('Futebol'));
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())