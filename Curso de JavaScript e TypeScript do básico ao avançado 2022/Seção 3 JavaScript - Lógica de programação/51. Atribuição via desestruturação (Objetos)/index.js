const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

    // ISSO
// const nome = pessoa.nome;
// const sobrenome = pessoa.sobrenome;
// const i = pessoa.idade;
// console.log(nome, sobrenome, i);

    // E ISSO SÃO A MESMA COISA
// const { nome, sobrenome, idade: i } = pessoa;
// console.log(nome, sobrenome, i);

// const { endereco: { rua, numero }} = pessoa;
// console.log(rua, numero);