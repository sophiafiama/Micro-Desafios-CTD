// Com base no ano atual e no ano de nascimento de uma pessoa, imprimir uma mensagem 
// que diga se ela poderá ou não votar na próxima eleição 
//(não é necessário considerar o mês em que a pessoa nasceu). 

let anoNascimento = 2020

let votacao = function(){
    return 2022 - anoNascimento >= 16 ? console.log(" Você pode votar!") : console.log("Você ainda não pode votar!")
} 

votacao()

