function decrementar(numero){
    console.log(numero)
numero--
if(numero>0){
    decrementar(numero)
}
}
decrementar(3)


function encrementar(numero){
    console.log(numero)
numero++
if(numero<10){
    encrementar(numero)
}
}
encrementar(3)

