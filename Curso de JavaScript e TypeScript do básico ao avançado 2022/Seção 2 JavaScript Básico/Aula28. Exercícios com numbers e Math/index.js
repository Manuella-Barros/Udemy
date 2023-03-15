let num = Number(prompt("Digite um número: "));
let texto = document.getElementById("texto");

document.getElementById("numero").innerHTML = num;

texto.innerHTML += `<p> Raiz quadrada: <strong>${55 ** 0.5}</strong></p>`;
texto.innerHTML += `<p> 55 é inteiro: <strong>${Number.isInteger(num)}</strong></p>`;
texto.innerHTML += `<p> Arredondando pra baixo: <strong>${Math.floor(num)}</strong></p>`;
texto.innerHTML += `<p> Arredondando pra cima: <strong>${Math.ceil(num)}</strong></p>`;
texto.innerHTML += `<p> Com duas casas decimais: <strong>${num.toFixed(2)}</strong></p>`;