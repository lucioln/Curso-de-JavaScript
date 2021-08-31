const elementos = [
    { tag: 'p', texto: "Nostrum illum eaque quia delectus minus voluptas dicta quos ab suscipit consectetur laborum odio asperiores fugit, excepturi ex veritatis, culpa numquam voluptates!" },
    { tag: 'div', texto: "Texto 2" },
    { tag: 'footer', texto: "Texto 3" },
    { tag: 'section', texto: "Texto 4" },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let criaTag = document.createElement(tag);
    let criaTexto = document.createTextNode(texto);

    criaTag.appendChild(criaTexto);
    div.appendChild(criaTag);
}

container.appendChild(div);