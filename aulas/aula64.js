//############# PARTE 1 da AULA #################

// try {
//     console.log('Abri um arquivo');
//     console.log(a); // ERRO
//     console.log('Manipulei o arquivo');
//     console.log('Fechei o arquivo');
// } catch (error) {
//     //É executado quando há erros
//     console.log('Tratando o erro');
// } finally {
//     // Sempre será executado
//     console.log('FINALLY: Eu sempre sou executado!')
// }

//########### Parte 2 da AULA ##################

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância do tipo DATE');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    //tratar erro
} finally {
    console.log("Tenha um bom dia!");
}