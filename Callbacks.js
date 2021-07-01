// function nomeCompleto(nome, sobrenome){
//     return nome + " " + sobrenome
// }

// function iniciais(nome, sobrenome){
//     return nome[0] + " " + sobrenome[0]
// }

// function bomDia(nome, sobrenome, callback){
//     return "Olá, " + callback(nome, sobrenome)
// }


// console.log(bomDia("Amanda", "Ferreira",nomeCompleto))
// console.log(bomDia("Amanda", "Ferreira",iniciais))


// Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.



function acaoCarro(callback){
    return callback
}

function andar(){
    return "O carro está Andando"
}

function parar(){
    return "O carro parou"
}

console.log(acaoCarro(parar()))
console.log(acaoCarro(andar()))



