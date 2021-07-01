//  Criar uma função que verifique se um valor é positivo, negativo ou zero. 


 let positivoOuNegativo = function (numero){
     if(numero>0){
         return numero + " É um número Positivo"
     }
     if(numero===0){
         return "Zero"
     }
     else{
         return numero + " É um número Negativo"
     }

 }

 console.log(positivoOuNegativo(3))
 console.log(positivoOuNegativo(5))
 console.log(positivoOuNegativo(-2))
 console.log(positivoOuNegativo(-8))
 console.log(positivoOuNegativo(7))
 console.log(positivoOuNegativo(0))
 console.log(positivoOuNegativo(-10))