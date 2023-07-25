//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(number). Retorne true se a imagem estiver no modo paisagem

// FUNÇÃO NORMAL
// function ePaisagem(largura, altura){
//     return largura > altura? true : false;
// }
// console.log(ePaisagem(100, 150));

// ARROW FUNCTION
var ePaisagem = (largura, altura) => { return largura > altura? true : false;}
console.log(ePaisagem(100, 150))