function meuEscopo () { // função pra n haver conflitos de variaveis
    const form = document.querySelector('.form');

    form.onsubmit = function (evento) {
        alert(1);
    };
}