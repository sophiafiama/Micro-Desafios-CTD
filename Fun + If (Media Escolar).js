//Considere duas notas referentes a avaliações efetuadas por um aluno. 
//Calcular a média aritmética e imprimir uma mensagem que diga se o aluno foi ou não aprovado 
//(considerar que média igual ou maior que 6 o aluno é aprovado). 
//Imprimir também a média calculada. 

let notaUm = 2
let notaDois = 8
var media = (notaDois + notaUm) / 2 

let aprovacao = function(){
    if (media >=6){
       return console.log("Parabéns, você foi aprovado com média " + media)
    } else{
        return console.log ("Infelizmente você foi reprovado, sua média foi " + media)
    }
}

aprovacao()

