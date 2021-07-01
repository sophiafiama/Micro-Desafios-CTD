// Criar uma função para verificar se um número é par ou ímpar. 
//Um número é par quando na divisão por 2 o resto é 0. 


let parOuImpar = function(num){
  if(num % 2 === 0) {
     return console.log(num + " É um número par!")
    } else return console.log(num + " É um número impar!")
}

parOuImpar(2)
parOuImpar(3)
parOuImpar(5)
parOuImpar(8)

 