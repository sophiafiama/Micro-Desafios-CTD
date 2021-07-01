// pequenos blocos de códigod prontos , podemos evocar essa função em vários momentos 
//função nome da função () cou ou sem parametros { corpo da função}

// function nomeFuncao (parametros)
{
    //corpo da função declarativa 
}

// ex função declarativa : objetivo elevar ao cubo e extrair a raiz quadrada 

function calcularEx(numero) {
    let resultado =  Math.pow(numero,3)
    console.log(resultado)
    resultado=Math.sqrt(resultado)
    return resultado
}

// invocar a função 

calcularEx(6) // o return não aparecerá 
console.log(calcularEx(6))

// criar funções que façam calculos aritiméticos básicos 
