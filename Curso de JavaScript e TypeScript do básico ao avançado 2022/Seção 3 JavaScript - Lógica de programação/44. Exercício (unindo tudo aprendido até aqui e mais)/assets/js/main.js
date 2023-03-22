const form = document.querySelector('#form');
const res = document.querySelector('#res-imc');

form.addEventListener('submit', function enviaForm(evento) {
    res.innerHTML = ""; // Limpa a div res
    evento.preventDefault();
    var peso = form.querySelector('#input-peso').value;
    var altura = form.querySelector('#input-altura').value;
    var imc = calculaIMC(peso, altura);

    imprimeTela(imc);
});

function calculaIMC(peso, altura){
    return peso / Math.pow(altura, 2); //formula IMC = peso / altura²
}

function imprimeTela(imc){
    res.innerHTML += ` Seu IMC é de ${imc.toFixed(2)} <br>`;
    if(imc <= 18.5){
        res.innerHTML += `Você está abaixo de peso`;

    } else if(imc > 18.5 && imc <= 24.9){
        res.innerHTML += `Você está com o peso normal`;

    } else if(imc > 25 && imc <= 29.9){
        res.innerHTML += `Você está com sobrepeso`;

    } else if(imc > 30 && imc <= 34.9){
        res.innerHTML += `Você está com obesidade grau 1`;

    } else if(imc > 35 && imc <= 40){
        res.innerHTML += `Você está com obesidade grau 2`;

    } else if(imc > 40){
        res.innerHTML += `Você está com obesidade grau 3`;

    }

    res.style.cssText = 'background-color: rgb(105, 238, 105); height: 80px; padding: 5px 20px;';

    form.reset(); // Limpa o input
}