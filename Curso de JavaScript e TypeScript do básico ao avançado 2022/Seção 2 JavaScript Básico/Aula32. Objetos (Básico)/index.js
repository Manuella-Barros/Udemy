// FUNÇÃO QUE CRIA OBJETOS

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
console.log(pessoa1.nome);