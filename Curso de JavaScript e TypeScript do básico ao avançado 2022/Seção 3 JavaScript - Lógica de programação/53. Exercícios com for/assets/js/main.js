//Criar uma array de objetos com nomes de tags e texto e adicione na pag inicial
const container = document.querySelector(".container");
const paragrafos = [
    {tag: "h1", texto: "Texto 1"},
    {tag: "h2", texto: "Texto 2"},
    {tag: "p", texto: "Texto 3"},
]

for(var i = 0; i < paragrafos.length; i++){
    var {tag, texto} = paragrafos[i];
    var tagCriada = document.createElement(tag);
    tagCriada.innerText += texto;
    container.appendChild(tagCriada);
}
