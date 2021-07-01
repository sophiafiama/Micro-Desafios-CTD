let podeSubir = function(altura, acompanhada){
    if(altura>140 && altura<200){
        return "Acesso autorizado"
    }
    if(altura<140 && acompanhada ){
        return "Acesso autorizado, com acompanhante"
    }

    else 
        return "Acesso Negado"
    }


console.log(podeSubir(139,true))
console.log(podeSubir(139,false))
console.log(podeSubir(220,true))
console.log(podeSubir(160,false))
console.log(podeSubir(170,true))

//if(altura<140 ){
    //return false