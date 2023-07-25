// Escreva uma função que recebe 2 números e retorne o maior deles
//Maneiras diferentes de fazer o mesmo codigo

// METODO 1
function comparaNum(num1, num2){
    if(num1 > num2){
        return "O maior numero é " + num1;
    } else if(num1 < num2){
        return "O maior numero é " + num2;
    } else{
        return "Os números são iguais";
    }
}
var num = comparaNum(4,2);
console.log(num)

// METODO 2
// function comparaNum(num1, num2){
//     return num1 > num2? num1 : num2;
// }

// METODO 3
// var num = (num1, num2) => {
//     return num1 > num2? num1 : num2;
// }
// console.log(num(4,2))

