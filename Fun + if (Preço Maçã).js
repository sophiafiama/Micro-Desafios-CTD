//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, 
// e R$ 1,00 se forem compradas pelo menos 12. 
// Criar uma função que através do parâmetro quantidade calcule e imprima o custo total da compra.

let precoMacaUm = 1.30
let precoMacaDois = 1
let macasCompradas = 8

let precoMacaFinal = function(){

    if (macasCompradas >= 12) {
        return macasCompradas*precoMacaDois
    } else{ return macasCompradas*precoMacaUm
    }
        
    }

  console.log(precoMacaFinal())