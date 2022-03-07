const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});
function criaBtnApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerHTML = 'Apagar'
    // btnApagar.classList.add('apagar');
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(btnApagar);
}
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
function criaTarefa(TextoInput) {
    const li = criaLi();
    li.innerText = TextoInput;
    tarefas.appendChild(li);
    inputTarefa.value = "";
    criaBtnApagar(li);
    salvarTarefas();
}


btnTarefa.addEventListener('click', function (event) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    };
});
addTarefasSalvas()