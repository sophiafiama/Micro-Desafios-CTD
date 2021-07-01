// Faça um programa que considere: quantidade atual em estoque, 
let estoqueAtual = 10 
//quantidade máxima em estoque e quantidade mínima em estoque de um produto. 
let estoqueMinimo = 1
let estoqueMaximo = 20
// Calcular e imprimir a quantidade média (quantidade média = (quantidade máxima + quantidade mínima) /2 
// Se a quantidade em estoque for maior ou igual a quantidade média imprimir a mensagem 

//'Não efetuar compra', senão imprimir a mensagem 'Efetuar compra'
let estoqueMedio = function () {
   let mediaEstoque =  estoqueMinimo+estoqueMaximo/2
    if(mediaEstoque<= estoqueAtual){
        return "Não efetuar compra, estoque atual é de: "+ estoqueAtual

    } else{
       return "Efetuar compra, estoque atual é de: "+ estoqueAtual
    }
}

console.log(estoqueMedio())