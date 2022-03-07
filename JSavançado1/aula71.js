// Escopo Lexo
const nome = 'Lucio';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = "Noleto";// Nao vai alterar o excopo lexo de falaNome()
    falaNome();
}

usaFalaNome();