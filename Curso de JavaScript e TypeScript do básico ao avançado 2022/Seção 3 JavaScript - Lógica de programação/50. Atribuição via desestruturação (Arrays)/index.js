//                      EXEMPLO DE ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
// let a = 'A';
// let b = 'B';
// let c = 'C';

// let letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

//                      OUTRO EXEMPLO
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiro, segundo, ...resto] = numeros;
console.log(primeiro); // o primeiro item do array foi atribuido a esta variável
console.log(segundo);// o segundo item do array foi atribuido a esta variável
console.log(resto); // o resto item do array foi atribuido a esta variável pelos 3 pontinhos (...)