var nomeJogador = "Pamela"
var golsJogador = 0
var precoEmDolar = 0

function fazerGol (){
    golsJogador++
    precoEmDolar += 10000
    console.log("GOL!!!")
    console.log("Sabe de quem?" + " "+ nomeJogador + " " +  "marcou" + " " +  golsJogador +  " Gols e ganhou" + " " +  "USD" + " " + precoEmDolar)
}

function hatTrick (){
    fazerGol()
    fazerGol()
    fazerGol()
    precoEmDolar = precoEmDolar * 1.1
    console.log("Temos um Hat Trick? " +  nomeJogador + " " + "marcou " +  golsJogador + " Gols e ganhou" + precoEmDolar)
  }


hatTrick()











