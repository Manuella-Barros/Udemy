let container = document.querySelector('.container');

let elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]

let [p, div, footer, section] = elementos;
console.log(p.texto);
console.log(div);
console.log(footer);
console.log(section);

const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";
document.document.querySelector('.container').appendChild(para);
