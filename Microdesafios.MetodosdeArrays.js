
// const pedidos = [3,5,8,9,2]

// // const pedidosBrindes = pedidos.map(el=>el+1)

// const pedidosBrindes = pedidos.map(
//     function(el){
//         return el+1
//     }
// )

// console.log(pedidosBrindes)

// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
const numerosPares = [2,4,6,8,10]
const numerosImpares = numerosPares.map(el=>el+1)

console.log(numerosImpares)


// // Crie um array de nomes, que possua dois índices com o nome Maria. 
// Utilize o filter() para obter apenas esses dois índices com o nome Maria.

const nomes = ["Maria", "Ana", "Maria","Luiz", "Thammy", "Theo"]

const nomesFiltrados = nomes.filter(el => el== "Maria")
console.log(nomesFiltrados)


// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

const num = [1,5,9,3,7]
const numString = num.reduce(function(acumulador,el,i,arrayNum){
    return arrayNum.toString()
}
)
console.log(numString)

const numStringDois = num.reduce(function(acumulador,el){
    return acumulador + " - " + el
}
)
console.log(numStringDois)



// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

const animais = ["Leão","Formiga","Elefante","Gambá"]

const listaAnimais = animais.forEach(function(el){
    console.log("O animal é: " + el)
 
} 
)

console.log(listaAnimais)


