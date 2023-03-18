function meuEscopo () { // função pra n haver conflitos de variaveis
    const form = document.querySelector('.form');
    const res = document.querySelector('.resultado')
    var listaPessoas = []; //Lista das pessoas

    function enviaDados (evento) {
        evento.preventDefault(); // Faz o botão seguir oq eu colocar aqui
        // ABAIXO pega as informações do form
        var nome = form.querySelector('#nome').value;
        var sobrenome = form.querySelector('#sobrenome').value;
        var peso = form.querySelector('#peso').value;
        var altura = form.querySelector('#altura').value;

        //Adiciona na array oq for criado na função
        listaPessoas.push(criaPessoa(nome, sobrenome, peso, altura)); 

        console.log(listaPessoas);

        res.innerHTML += `${nome} ${sobrenome} ${peso} ${altura} <br>`;

        form.reset(); // Limpa formulário
    }

    function criaPessoa (nome, sobrenome, peso, altura) { // Cria um objeto pra cada pessoa inserida
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }
    }

    form.addEventListener('submit', enviaDados);
}

meuEscopo();