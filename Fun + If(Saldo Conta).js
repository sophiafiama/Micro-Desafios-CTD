// Criar uma função que considere o número da conta do cliente, saldo, débito e crédito. 
//Calcular e imprimir o saldo atual (saldo atual = saldo - débito + crédito). 
// Também testar se saldo atual for maior ou igual a zero imprimir a mensagem 'Saldo Positivo',
// senão imprimir a mensagem 'Saldo Negativo'. 

let saldoInicial = 0
let debitoConta = 200
let creditoConta = 400

let saldoConta = function () {
   
    let resultadosaldo = saldoInicial - debitoConta + creditoConta 
    if (resultadosaldo >= 0) {
        console.log("Saldo positivo BRL " + resultadosaldo )
    }
    else {console.log("Saldo negativo BRL " + resultadosaldo )

    }
}

saldoConta()
