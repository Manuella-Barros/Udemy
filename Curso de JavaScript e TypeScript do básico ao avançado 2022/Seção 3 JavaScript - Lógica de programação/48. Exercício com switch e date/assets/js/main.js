document.addEventListener("DOMContentLoaded", function (e) { // Ao carregar a pagina
    e.preventDefault();
    var data = new Date(2022, 01, 09, 12, 07);
    var diaDaSemanaNum = data.getDay();
    var diaDaSemana = semanaNome(diaDaSemanaNum); //Função q da o nome do dia
    var dia = data.getDate();
    var mesNum = data.getMonth();
    var mes = mesNome(mesNum); // Função 1 da o nome do mes
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    zeroEsquerda (min);

    imprimeData(diaDaSemana, dia, mes, ano, hora, min);
})

function semanaNome (diaDaSemanaNum) {
    switch(diaDaSemanaNum) {
        case 0:
            return 'Domingo';
            break;
        case 1:
            return 'Segunda-feira';
            break;
        case 2:
            return 'Terça-feira';
            break;
        case 3:
            return 'Quarta-feira';
            break;
        case 4:
            return 'Quinta-feira';
            break;
        case 5:
            return 'Sexta-feira';
            break;
        case 6:
            return 'Sabado';
            break;
    }
}

function mesNome (mesNum) {
    switch(mesNum){
        case 0:
            return 'janeiro';
            break;
        case 1:
            return 'fevereiro';
            break;
        case 2:
            return 'março';
            break;
        case 3:
            return 'abril';
            break;
        case 4:
            return 'maio';
            break;
        case 5:
            return 'junho';
            break;
        case 6:
            return 'julho';
            break;
        case 7:
            return 'agosto';
            break;
        case 8:
            return 'setembro';
            break;
        case 9:
            return 'outubro';
            break;
        case 10:
            return 'novembro';
            break;
        case 11:
            return 'dezembro';
            break;
    }
}

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function imprimeData (diaDaSemana, dia, mes, ano, hora, min) {
    var resHora = document.querySelector('#resHora');

    resHora.innerHTML += `${diaDaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
}