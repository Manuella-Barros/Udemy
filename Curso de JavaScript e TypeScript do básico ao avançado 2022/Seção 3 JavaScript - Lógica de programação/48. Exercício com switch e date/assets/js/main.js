//             JEITO QUE EU FIZ

document.addEventListener("DOMContentLoaded", function (e) { // Ao carregar a pagina
    e.preventDefault();
    var data = new Date();
    var diaDaSemana = getSemanaNome(data.getDay()); // pega o numero e já retorna o nome do DIA DA SEM
    var dia = zeroEsquerda(data.getDate()); // pega o DIA e confere se precisa de 0 a esquerda
    var mes = getMesNome(data.getMonth()); // pega o MES e confere se precisa de 0 a esquerda
    var ano = data.getFullYear();
    var hora = zeroEsquerda(data.getHours()); // pega a HORA e confere se precisa de 0 a esquerda
    var min = zeroEsquerda(data.getMinutes()); // pega o MIN e confere se precisa de 0 a esquerda

    imprimeData(diaDaSemana, dia, mes, ano, hora, min);
})

function getSemanaNome (diaSemanaNum) { //Função q da o nome do dia
    switch(diaSemanaNum) { // n usa break pq to usando return
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sabado';
    }
}

function getMesNome (mesNum) { // Função q da o nome do mes
    switch(mesNum){
        case 0:
            return 'janeiro';
        case 1:
            return 'fevereiro';
        case 2:
            return 'março';
        case 3:
            return 'abril';
        case 4:
            return 'maio';
        case 5:
            return 'junho';
        case 6:
            return 'julho';
        case 7:
            return 'agosto';
        case 8:
            return 'setembro';
        case 9:
            return 'outubro';
        case 10:
            return 'novembro';
        case 11:
            return 'dezembro';
    }
}

function zeroEsquerda (num) { // Função que resolve os 0 na esquerda
    return num >= 10 ? num : `0${num}`;
}

function imprimeData (diaDaSemana, dia, mes, ano, hora, min) {
    var resHora = document.querySelector('#resHora');

    resHora.innerHTML += `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
}

//                            JEITO Q O PROF FEZ, MAIS OTIMIZADO
// document.addEventListener("DOMContentLoaded", function (e) { // Ao carregar a pagina
//     e.preventDefault();
//     var data = new Date();
//     var diaDaSemana = getSemanaNome(data.getDay()); // pega o numero e já retorna o nome do DIA DA SEM
//     var dia = zeroEsquerda(data.getDate()); // pega o DIA e confere se precisa de 0 a esquerda
//     var mes = getMesNome(data.getMonth()); // pega o MES e confere se precisa de 0 a esquerda
//     var ano = data.getFullYear();
//     var hora = zeroEsquerda(data.getHours()); // pega a HORA e confere se precisa de 0 a esquerda
//     var min = zeroEsquerda(data.getMinutes()); // pega o MIN e confere se precisa de 0 a esquerda

//     imprimeData(diaDaSemana, dia, mes, ano, hora, min);
// })

// function getSemanaNome (diaSemanaNum) { //Função q da o nome do dia
//     const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
    
//     return semana[diaSemanaNum]
// }

// function getMesNome (mesNum) { // Função q da o nome do mes
//     const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
//     return meses[mesNum]
// }

// function zeroEsquerda (num) { // Função que resolve os 0 na esquerda
//     return num >= 10 ? num : `0${num}`;
// }

// function imprimeData (diaDaSemana, dia, mes, ano, hora, min) {
//     var resHora = document.querySelector('#resHora');

//     resHora.innerHTML += `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
// }