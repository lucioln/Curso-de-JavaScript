// Escreva uma função chamada ePaisagem que
// recebe 2 argumentos,largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo
// paisagem

const ePaisagem = (Largura, Altura) =>
    Largura > Altura ? 'Modo paisagem' : 'Modo Retrato';

console.log(ePaisagem(120, 100));