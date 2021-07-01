// Crie um array que contenha nomes de produtos para compra.
// Após isso, exiba no console os resultados das funções relacionadas aos arrays,
// que são: Join, Pop, Push, Shift e Unshift.
// Também se deve escrever com suas palavras, o que cada função realiza.
// Seguem abaixo alguns exemplos.
// console.log(“O método Join realiza tal coisa”)
// // console.log(RESULTADO_DO_JOIN)

let compras = ["Pão", "Leite", "Queijo","Tomate"]
console.log(compras)


let comprasComVirgulas = compras.join()
console.log(comprasComVirgulas)
let comprasComTraco = compras.join(" - ")
console.log(comprasComTraco)

compras.push("Requeijão")
console.log(compras)

compras.pop()
console.log(compras)

compras.shift()
console.log(compras)

compras.unshift("Arroz")
console.log(compras)

console.log(compras.lastIndexOf("Arroz"))
console.log(compras.indexOf("Arroz"))
