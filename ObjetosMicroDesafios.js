// Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).

// // Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.


function Restaurante (nome, cardapio) {
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada = function () {
        return 'Seja bem-vindo à ' + this.nome + '! No cardápio de hoje temos: ' + this.cardapio
    }
}

let novoRestaurante = new Restaurante ("Sophis Na Cozinha", ["Pães com Antepastos"])

console.log(novoRestaurante.entrada())

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

let tempoPipoca= 10
let tempoMacarao= 8
let tempoCarne= 15
let tempoFeijao= 12
let tempoBrigadeiro= 8
